import ProtoMessageRegister from "../protobuf/ProtoMessageRegister";
import IMessage from "./IMessage";

export default class ProtoMessageHelper {
    private static _protobuff: any = null;
    private static pb: any;
    private static _messageReqMap: Map<number, IMessage> = new Map<number, IMessage>();
    private static _messageRespMap: Map<number, IMessage> = new Map<number, IMessage>();
    public static init(): void {
        this._protobuff = (window as any).protobuf;
        this._protobuff.load(ProtoMessageRegister.getProtoBuffList(), (err: any, root: any) => {
            if (err) {
                console.log(err);
                return;
            }

            this.pb = root;
            ProtoMessageRegister.register();
        });
    }
    public static registerRespMessage(moduleName: string, messageId: number): void {
        if (!this._messageRespMap.has(messageId)) {
            let messageClass = this.getMessageType(moduleName);
            this._messageRespMap.set(messageId, messageClass);
        }
    }
    public static registerReqMessage(moduleName: string, messageId: number): void {
        if (!this._messageReqMap.has(messageId)) {
            let messageClass = this.getMessageType(moduleName);
            this._messageReqMap.set(messageId, messageClass);
        }
    }
    public static getMessageTypeByModule(moduleName: string, typeName: string): IMessage {
        return this.pb.lookupType(moduleName + '.' + typeName);
    }

    public static getMessageType(typeName: string): IMessage {
        return this.pb.lookupType(typeName);
    }
    public static getIndexByMessageType(typeName: string): any {
        let types = typeName.split(".");
        if (types.length == 2) {
            return this._protobuff[types[0]][types[1]];
        }
    }
    public static getMessageRespTypeByIndex(MessageId: number): IMessage {
        return this._messageRespMap.get(MessageId);
    }
    public static getMessageReqTypeByIndex(MessageId: number): IMessage {
        return this._messageReqMap.get(MessageId);
    }
}