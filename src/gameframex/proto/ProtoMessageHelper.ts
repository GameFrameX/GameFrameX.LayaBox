export default class ProtoMessageHelper {
    private static protobuf: any = (window as any).protobuf.roots.default;
    public static getMessageTypeByModule(moduleName: string, typeName: string): any {
        return this.protobuf[moduleName][typeName];
    }

    public static getMessageType(typeName: string): any {
        return this.protobuf[typeName];
    }
}