import EventName from "../event/EventName";
import EventSystems from "../event/EventSystems";
import Log from "../log/log";
import UtilityTime from "../utility/UtilityTime";
import { NetworkSatus } from "./NetworkSatus";
export default class Network {
    public isEnterSuccess = false;
    private _reconnectCount: number = 0;

    private _socket: Laya.Socket;
    private _host: string;
    private _port: number;
    private _onConnected: Function;
    private _lastTick: number = 0;
    private _sendByte: Laya.Byte;
    private _recvByte: Laya.Byte;
    private _socketStatus: number = NetworkSatus.STATUS_DISCONNECT;
    private _autoLoginTimes: number = 4;
    private _curSendArr: any[] = [];
    private _curSendTime: number = 0;
    private _lastRecvTime: number = 0;

    constructor() {
        this._sendByte = new Laya.Byte();
        this._sendByte.endian = Laya.Byte.LITTLE_ENDIAN;
        this._recvByte = new Laya.Byte();
        this._socket = new Laya.Socket();
        this._socket.endian = Laya.Byte.LITTLE_ENDIAN;
        this.addEvents();
        Laya.timer.loop(2000, this, this.onHeart);
    }

    private addEvents() {
        this._socket.on(Laya.Event.OPEN, this, this.openHandler);
        this._socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
        this._socket.on(Laya.Event.CLOSE, this, this.closeHandler);
        this._socket.on(Laya.Event.ERROR, this, this.errorHandler);
    }

    private openHandler(event: any = null): void {
        EventSystems.dispatch(EventName.SocketConnected, event);
        let dt = Laya.timer.currTimer - this._lastTick;
        Log.log(`连接成功: host:${this._host} port:${this._port} 时长:${dt}`);
        this.updateStatus(NetworkSatus.STATUS_CHECKING);

        // 校验
        if (this._onConnected) {
            this._onConnected();
        }
    }

    private _ignoreLogMsgMap = new Map([[30, true]]);
    private receiveHandler(data: any = null): void {
        this._lastRecvTime = Laya.timer.currTimer;
        this._recvByte.clear();
        this._recvByte.writeArrayBuffer(data);
        this._recvByte.pos = 0;
        let pkgLen = this._recvByte.length;

        if (pkgLen < 8) {
            return;
        }

        let msgIdx = this._recvByte.readInt32();
        if (10000 == msgIdx) {
            this._socket.input.clear();
            return;
        }
        let len = this._recvByte.readInt32();

        if (len != pkgLen - 8) {
            Log.print("receiveHandler:" + msgIdx + ':' + pkgLen);
            return;
        }

        // let msgName = ProtobufManager.ins().getMessageName(msgIdx);
        // let MsgClass = ProtobufManager.ins().getMessageClass(msgName);
        // let message: any = null;
        // if (MsgClass) {
        //     let buf = this._recvByte.readUint8Array(8, len);
        //     message = MsgClass.decode(buf);
        // }

        // if (!this._ignoreLogMsgMap.has(msgIdx)) {
        //     Log.log("recv:", msgName, message ? message : "");
        // }

        // this._socket.input.clear();
        // if (msgIdx == 2) {
        //     this.updateStatus(NetworkSatus.STATUS_COMMUNICATION);
        //     this.send("EnterRequest", { uid: "0" });
        // } else if (this._socketStatus == NetworkSatus.STATUS_COMMUNICATION) {
        //     let err_code = message ? message.err_code : 0;
        //     if (err_code != null && err_code != 0) {
        //         AppL.UIMgr.showErrorTips(err_code);
        //     } else {
        //         EventSystems.dispatch(msgName, message);
        //     }
        // }
    }

    private closeHandler(e: any = null): void {
        Log.log("与服务器的连接断开了！", e);
        EventSystems.dispatch(EventName.SocketClose, e);
        this.close();
        this.checkReconnect();
    }

    private errorHandler(e: any = null): void {
        Log.log("连接出错，开始重连！", e);
        EventSystems.dispatch(EventName.SocketError, e);
        this.close();
        this.checkReconnect();
    }

    private checkReconnect(): void {
        // if (AppL.isAutoLogin) {
        //     if (this._autoLoginTimes == 0) {
        //         EventSystems.dispatch('AutoLoginFail');
        //         return;
        //     } else {
        //         Laya.timer.once(100, Platform, Platform.enterGame);
        //     }
        //     this._autoLoginTimes--;
        // } else {
        //     Laya.timer.once(2000, this, this.reconnect);
        // }
    }
    //------------------------------事件结束------------------------------

    setOnConnected(ex: Function, obj: any) {
        this._onConnected = ex.bind(obj);
    }

    connect(host: string, port: number = 0): void {
        Laya.timer.clear(this, this.checkConnectTimeOut);
        Laya.timer.clear(this, this.continueReconnect);
        Log.log(`开始连接: host:${host} port:${port}`);
        if (this._socketStatus != NetworkSatus.STATUS_DISCONNECT) {
            return;
        }
        Laya.timer.clear(this, this.reconnect);
        this._lastTick = Laya.timer.currTimer;
        this._host = host;
        this._port = port;
        this.updateStatus(NetworkSatus.STATUS_CONNECTING);
        this._socket.connectByUrl(host + ":" + port);
        Laya.timer.once(1000, this, this.checkConnectTimeOut);
        // if (location.protocol.indexOf("https:") != -1) {
        //     this._socket.connectByUrl(`ws://${host}:${port}`);
        // } else {
        //     this._socket.connect(host, port);
        // }
    }

    private checkConnectTimeOut(): void {
        if (this._socketStatus != NetworkSatus.STATUS_CHECKING && this._socketStatus != NetworkSatus.STATUS_COMMUNICATION) {
            //防止第一次连接，没连接上，收不到后端返回消息，socket状态不清理，后续手动发起连接无效的问题
            this.updateStatus(NetworkSatus.STATUS_DISCONNECT);
        }
    }

    close(isDrive?: boolean): void {
        if (isDrive) {
            this._reconnectCount = 3;
        }

        this._curSendArr = [];
        Laya.timer.clear(this, this.checkSendList);
        this.isEnterSuccess = false;
        this.updateStatus(NetworkSatus.STATUS_DISCONNECT);
        Laya.timer.clear(this, this.checkConnectTimeOut);
        Laya.timer.clear(this, this.continueReconnect);
        EventSystems.dispatch(EventName.SocketClose);
        if (!this._socket)
            return;
        this._socket.close();
    }

    reconnect(isClick?: boolean): void {
        if (isClick) {
            this._reconnectCount = 0;
        } else {

        }

        if (this._reconnectCount > 2) {
            //网络断开了
            return;
        }
        this.connect(this._host, this._port);
        this._reconnectCount++;
        // EventSystems.dispatch(MsgUtil.SocketReconnect);
        Laya.timer.once(1000, this, this.continueReconnect);
    }

    /**
     * 使用计时器检测发起重连，不依赖于后端返回连接状态，避免socket重连中止；
     */
    private continueReconnect() {
        if (this._socketStatus === NetworkSatus.STATUS_COMMUNICATION) {
            return;
        }
        Log.log('计时器触发 继续重连');
        if (this._socketStatus != NetworkSatus.STATUS_CHECKING) {
            this.reconnect();
        }
    }

    private updateStatus(status: number): void {
        if (this._socketStatus == status) {
            return;
        }
        this._socketStatus = status;
    }

    private onHeart() {
        let dt = Laya.timer.currTimer - this._lastRecvTime;
        // if (!AppL.DebugUtils.isDebug && dt > 45000) {
        //     this.close(true);
        // } else if (dt > 15000) {
        //     if (this._socketStatus == NetworkSatus.STATUS_COMMUNICATION) {
        //         //心跳只能在socket连接成功，且登录请求成功之后 才可以发送
        //         this.send("GameHeart", { time: Math.floor(Laya.timer.currTimer / 1000) });
        //     }
        // }
    }

    isConnected(): boolean {
        if (this._socket && this._socket.connected) {
            return true;
        } else {
            return false;
        }
    }

    send(msgName: string, data?: any): boolean {
        if (!this._socket.connected) {
            return false;
        }
        let dt = Laya.timer.currTimer;
        if (dt - this._curSendTime < 30) {
            this._curSendArr.push({ msgName: msgName, data: data });
            return true;
        }
        this._curSendTime = dt;
        // let msgIdx = ProtobufManager.ins().getMessageIndex(msgName);
        this._sendByte.writeInt32(10000);
        this._sendByte.writeInt32(UtilityTime.getCurrentTimestampWithSecond);
        this._sendByte.writeInt32(200);
        this.ProtoBuf.load(resPath, this.onAssetsLoaded);
        // let MsgClass = ProtobufManager.ins().getMessageClass(msgName);
        // if (!data) {
        //     data = {};
        // }

        // if (MsgClass) {
        //     var message: any = MsgClass.create(data);
        //     var buffer = MsgClass.encode(message).finish();
        //     this._sendByte.writeInt32(buffer.byteLength);
        //     this._sendByte.writeArrayBuffer(buffer);
        // } else {
        //     this._sendByte.writeInt32(0);
        // }

        // if (10000 != msgIdx) {
        //     Log.log("send:", msgName, "data:", data);
        // }
        this._socket.send(this._sendByte.buffer);
        this._sendByte.clear();
        this._sendByte.pos = 0;
        // Laya.timer.once(30, this, this.checkSendList);
        return true;
    }


    checkSendList(): void {
        let info = this._curSendArr.shift();
        if (info) {
            this.send(info.msgName, info.data);
        }
    }
}