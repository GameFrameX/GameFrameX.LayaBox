import LogHelper from "../log/LogHelper";
import UtilityAsset from "../utility/UtilityAsset";

export default class ProtoMessageHelper {
    private static _protobuff: any = null;
    private static pb: any;
    public static init(): void {
        this._protobuff = (window as any).protobuf;
        this._protobuff.load(UtilityAsset.getProtobuffList()).then((res: any) => {
            this.pb = res;
            console.log(res);
            console.log(this.pb.nested);
            // let keys = this.pb.nested.keys();
            // console.log(keys);
            // this.pb.nested.forEach((element: any) => {
            //     console.log(element);
            // });
        }).catch((err: any) => {
            console.log(err);
        })
    }
    public static getMessageTypeByModule(moduleName: string, typeName: string): any {
        return this._protobuff[moduleName][typeName];
    }

    public static getMessageType(typeName: string): any {
        return this._protobuff[typeName];
    }
    public static getIndexByMessageType(typeName: string): any {
        let types = typeName.split(".");
        if (types.length == 2) {
            return this._protobuff[types[0]][types[1]];
        }
    }
}