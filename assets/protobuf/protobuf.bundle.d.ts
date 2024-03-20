namespace protobuf {
    // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace Bag. */
export namespace Bag {

    /** Properties of a ReqBagInfo. */
    interface IReqBagInfo {
    }

    /** Represents a ReqBagInfo. */
    class ReqBagInfo implements IReqBagInfo {

        /**
         * Constructs a new ReqBagInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Bag.IReqBagInfo);

        /**
         * Creates a new ReqBagInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqBagInfo instance
         */
        public static create(properties?: Bag.IReqBagInfo): Bag.ReqBagInfo;

        /**
         * Encodes the specified ReqBagInfo message. Does not implicitly {@link Bag.ReqBagInfo.verify|verify} messages.
         * @param message ReqBagInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Bag.IReqBagInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqBagInfo message, length delimited. Does not implicitly {@link Bag.ReqBagInfo.verify|verify} messages.
         * @param message ReqBagInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Bag.IReqBagInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqBagInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bag.ReqBagInfo;

        /**
         * Decodes a ReqBagInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bag.ReqBagInfo;

        /**
         * Verifies a ReqBagInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqBagInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqBagInfo
         */
        public static fromObject(object: { [k: string]: any }): Bag.ReqBagInfo;

        /**
         * Creates a plain object from a ReqBagInfo message. Also converts values to other types if specified.
         * @param message ReqBagInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Bag.ReqBagInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqBagInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqBagInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResBagInfo. */
    interface IResBagInfo {

        /** ResBagInfo ItemDic */
        ItemDic?: ({ [k: string]: (number|Long) }|null);
    }

    /** Represents a ResBagInfo. */
    class ResBagInfo implements IResBagInfo {

        /**
         * Constructs a new ResBagInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Bag.IResBagInfo);

        /** ResBagInfo ItemDic. */
        public ItemDic: { [k: string]: (number|Long) };

        /**
         * Creates a new ResBagInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResBagInfo instance
         */
        public static create(properties?: Bag.IResBagInfo): Bag.ResBagInfo;

        /**
         * Encodes the specified ResBagInfo message. Does not implicitly {@link Bag.ResBagInfo.verify|verify} messages.
         * @param message ResBagInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Bag.IResBagInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResBagInfo message, length delimited. Does not implicitly {@link Bag.ResBagInfo.verify|verify} messages.
         * @param message ResBagInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Bag.IResBagInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResBagInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bag.ResBagInfo;

        /**
         * Decodes a ResBagInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bag.ResBagInfo;

        /**
         * Verifies a ResBagInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResBagInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResBagInfo
         */
        public static fromObject(object: { [k: string]: any }): Bag.ResBagInfo;

        /**
         * Creates a plain object from a ResBagInfo message. Also converts values to other types if specified.
         * @param message ResBagInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Bag.ResBagInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResBagInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResBagInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqComposePet. */
    interface IReqComposePet {

        /** ReqComposePet FragmentId */
        FragmentId?: (number|null);
    }

    /** Represents a ReqComposePet. */
    class ReqComposePet implements IReqComposePet {

        /**
         * Constructs a new ReqComposePet.
         * @param [properties] Properties to set
         */
        constructor(properties?: Bag.IReqComposePet);

        /** ReqComposePet FragmentId. */
        public FragmentId: number;

        /**
         * Creates a new ReqComposePet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqComposePet instance
         */
        public static create(properties?: Bag.IReqComposePet): Bag.ReqComposePet;

        /**
         * Encodes the specified ReqComposePet message. Does not implicitly {@link Bag.ReqComposePet.verify|verify} messages.
         * @param message ReqComposePet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Bag.IReqComposePet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqComposePet message, length delimited. Does not implicitly {@link Bag.ReqComposePet.verify|verify} messages.
         * @param message ReqComposePet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Bag.IReqComposePet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqComposePet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqComposePet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bag.ReqComposePet;

        /**
         * Decodes a ReqComposePet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqComposePet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bag.ReqComposePet;

        /**
         * Verifies a ReqComposePet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqComposePet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqComposePet
         */
        public static fromObject(object: { [k: string]: any }): Bag.ReqComposePet;

        /**
         * Creates a plain object from a ReqComposePet message. Also converts values to other types if specified.
         * @param message ReqComposePet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Bag.ReqComposePet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqComposePet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqComposePet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResComposePet. */
    interface IResComposePet {

        /** ResComposePet PetId */
        PetId?: (number|null);
    }

    /** Represents a ResComposePet. */
    class ResComposePet implements IResComposePet {

        /**
         * Constructs a new ResComposePet.
         * @param [properties] Properties to set
         */
        constructor(properties?: Bag.IResComposePet);

        /** ResComposePet PetId. */
        public PetId: number;

        /**
         * Creates a new ResComposePet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResComposePet instance
         */
        public static create(properties?: Bag.IResComposePet): Bag.ResComposePet;

        /**
         * Encodes the specified ResComposePet message. Does not implicitly {@link Bag.ResComposePet.verify|verify} messages.
         * @param message ResComposePet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Bag.IResComposePet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResComposePet message, length delimited. Does not implicitly {@link Bag.ResComposePet.verify|verify} messages.
         * @param message ResComposePet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Bag.IResComposePet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResComposePet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResComposePet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bag.ResComposePet;

        /**
         * Decodes a ResComposePet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResComposePet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bag.ResComposePet;

        /**
         * Verifies a ResComposePet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResComposePet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResComposePet
         */
        public static fromObject(object: { [k: string]: any }): Bag.ResComposePet;

        /**
         * Creates a plain object from a ResComposePet message. Also converts values to other types if specified.
         * @param message ResComposePet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Bag.ResComposePet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResComposePet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResComposePet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqUseItem. */
    interface IReqUseItem {

        /** ReqUseItem ItemId */
        ItemId?: (number|null);
    }

    /** Represents a ReqUseItem. */
    class ReqUseItem implements IReqUseItem {

        /**
         * Constructs a new ReqUseItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: Bag.IReqUseItem);

        /** ReqUseItem ItemId. */
        public ItemId: number;

        /**
         * Creates a new ReqUseItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqUseItem instance
         */
        public static create(properties?: Bag.IReqUseItem): Bag.ReqUseItem;

        /**
         * Encodes the specified ReqUseItem message. Does not implicitly {@link Bag.ReqUseItem.verify|verify} messages.
         * @param message ReqUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Bag.IReqUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqUseItem message, length delimited. Does not implicitly {@link Bag.ReqUseItem.verify|verify} messages.
         * @param message ReqUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Bag.IReqUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqUseItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bag.ReqUseItem;

        /**
         * Decodes a ReqUseItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bag.ReqUseItem;

        /**
         * Verifies a ReqUseItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqUseItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqUseItem
         */
        public static fromObject(object: { [k: string]: any }): Bag.ReqUseItem;

        /**
         * Creates a plain object from a ReqUseItem message. Also converts values to other types if specified.
         * @param message ReqUseItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Bag.ReqUseItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqUseItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqUseItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqSellItem. */
    interface IReqSellItem {

        /** ReqSellItem ItemId */
        ItemId?: (number|null);
    }

    /** Represents a ReqSellItem. */
    class ReqSellItem implements IReqSellItem {

        /**
         * Constructs a new ReqSellItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: Bag.IReqSellItem);

        /** ReqSellItem ItemId. */
        public ItemId: number;

        /**
         * Creates a new ReqSellItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSellItem instance
         */
        public static create(properties?: Bag.IReqSellItem): Bag.ReqSellItem;

        /**
         * Encodes the specified ReqSellItem message. Does not implicitly {@link Bag.ReqSellItem.verify|verify} messages.
         * @param message ReqSellItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Bag.IReqSellItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqSellItem message, length delimited. Does not implicitly {@link Bag.ReqSellItem.verify|verify} messages.
         * @param message ReqSellItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Bag.IReqSellItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqSellItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSellItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bag.ReqSellItem;

        /**
         * Decodes a ReqSellItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSellItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bag.ReqSellItem;

        /**
         * Verifies a ReqSellItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqSellItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqSellItem
         */
        public static fromObject(object: { [k: string]: any }): Bag.ReqSellItem;

        /**
         * Creates a plain object from a ReqSellItem message. Also converts values to other types if specified.
         * @param message ReqSellItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Bag.ReqSellItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqSellItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqSellItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResItemChange. */
    interface IResItemChange {

        /** ResItemChange ItemDic */
        ItemDic?: ({ [k: string]: (number|Long) }|null);
    }

    /** Represents a ResItemChange. */
    class ResItemChange implements IResItemChange {

        /**
         * Constructs a new ResItemChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: Bag.IResItemChange);

        /** ResItemChange ItemDic. */
        public ItemDic: { [k: string]: (number|Long) };

        /**
         * Creates a new ResItemChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResItemChange instance
         */
        public static create(properties?: Bag.IResItemChange): Bag.ResItemChange;

        /**
         * Encodes the specified ResItemChange message. Does not implicitly {@link Bag.ResItemChange.verify|verify} messages.
         * @param message ResItemChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Bag.IResItemChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResItemChange message, length delimited. Does not implicitly {@link Bag.ResItemChange.verify|verify} messages.
         * @param message ResItemChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Bag.IResItemChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResItemChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResItemChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bag.ResItemChange;

        /**
         * Decodes a ResItemChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResItemChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bag.ResItemChange;

        /**
         * Verifies a ResItemChange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResItemChange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResItemChange
         */
        public static fromObject(object: { [k: string]: any }): Bag.ResItemChange;

        /**
         * Creates a plain object from a ResItemChange message. Also converts values to other types if specified.
         * @param message ResItemChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Bag.ResItemChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResItemChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResItemChange
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace Basic. */
export namespace Basic {

    /** Properties of a ReqHeartBeat. */
    interface IReqHeartBeat {

        /** ReqHeartBeat Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a ReqHeartBeat. */
    class ReqHeartBeat implements IReqHeartBeat {

        /**
         * Constructs a new ReqHeartBeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: Basic.IReqHeartBeat);

        /** ReqHeartBeat Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new ReqHeartBeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqHeartBeat instance
         */
        public static create(properties?: Basic.IReqHeartBeat): Basic.ReqHeartBeat;

        /**
         * Encodes the specified ReqHeartBeat message. Does not implicitly {@link Basic.ReqHeartBeat.verify|verify} messages.
         * @param message ReqHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Basic.IReqHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqHeartBeat message, length delimited. Does not implicitly {@link Basic.ReqHeartBeat.verify|verify} messages.
         * @param message ReqHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Basic.IReqHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqHeartBeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Basic.ReqHeartBeat;

        /**
         * Decodes a ReqHeartBeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Basic.ReqHeartBeat;

        /**
         * Verifies a ReqHeartBeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqHeartBeat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqHeartBeat
         */
        public static fromObject(object: { [k: string]: any }): Basic.ReqHeartBeat;

        /**
         * Creates a plain object from a ReqHeartBeat message. Also converts values to other types if specified.
         * @param message ReqHeartBeat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Basic.ReqHeartBeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqHeartBeat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqHeartBeat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespHeartBeat. */
    interface IRespHeartBeat {

        /** RespHeartBeat Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a RespHeartBeat. */
    class RespHeartBeat implements IRespHeartBeat {

        /**
         * Constructs a new RespHeartBeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: Basic.IRespHeartBeat);

        /** RespHeartBeat Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new RespHeartBeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespHeartBeat instance
         */
        public static create(properties?: Basic.IRespHeartBeat): Basic.RespHeartBeat;

        /**
         * Encodes the specified RespHeartBeat message. Does not implicitly {@link Basic.RespHeartBeat.verify|verify} messages.
         * @param message RespHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Basic.IRespHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespHeartBeat message, length delimited. Does not implicitly {@link Basic.RespHeartBeat.verify|verify} messages.
         * @param message RespHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Basic.IRespHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespHeartBeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Basic.RespHeartBeat;

        /**
         * Decodes a RespHeartBeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Basic.RespHeartBeat;

        /**
         * Verifies a RespHeartBeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespHeartBeat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespHeartBeat
         */
        public static fromObject(object: { [k: string]: any }): Basic.RespHeartBeat;

        /**
         * Creates a plain object from a RespHeartBeat message. Also converts values to other types if specified.
         * @param message RespHeartBeat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Basic.RespHeartBeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespHeartBeat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespHeartBeat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqActorHeartBeat. */
    interface IReqActorHeartBeat {

        /** ReqActorHeartBeat Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a ReqActorHeartBeat. */
    class ReqActorHeartBeat implements IReqActorHeartBeat {

        /**
         * Constructs a new ReqActorHeartBeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: Basic.IReqActorHeartBeat);

        /** ReqActorHeartBeat Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new ReqActorHeartBeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqActorHeartBeat instance
         */
        public static create(properties?: Basic.IReqActorHeartBeat): Basic.ReqActorHeartBeat;

        /**
         * Encodes the specified ReqActorHeartBeat message. Does not implicitly {@link Basic.ReqActorHeartBeat.verify|verify} messages.
         * @param message ReqActorHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Basic.IReqActorHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqActorHeartBeat message, length delimited. Does not implicitly {@link Basic.ReqActorHeartBeat.verify|verify} messages.
         * @param message ReqActorHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Basic.IReqActorHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqActorHeartBeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqActorHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Basic.ReqActorHeartBeat;

        /**
         * Decodes a ReqActorHeartBeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqActorHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Basic.ReqActorHeartBeat;

        /**
         * Verifies a ReqActorHeartBeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqActorHeartBeat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqActorHeartBeat
         */
        public static fromObject(object: { [k: string]: any }): Basic.ReqActorHeartBeat;

        /**
         * Creates a plain object from a ReqActorHeartBeat message. Also converts values to other types if specified.
         * @param message ReqActorHeartBeat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Basic.ReqActorHeartBeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqActorHeartBeat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqActorHeartBeat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespActorHeartBeat. */
    interface IRespActorHeartBeat {

        /** RespActorHeartBeat Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a RespActorHeartBeat. */
    class RespActorHeartBeat implements IRespActorHeartBeat {

        /**
         * Constructs a new RespActorHeartBeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: Basic.IRespActorHeartBeat);

        /** RespActorHeartBeat Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new RespActorHeartBeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespActorHeartBeat instance
         */
        public static create(properties?: Basic.IRespActorHeartBeat): Basic.RespActorHeartBeat;

        /**
         * Encodes the specified RespActorHeartBeat message. Does not implicitly {@link Basic.RespActorHeartBeat.verify|verify} messages.
         * @param message RespActorHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Basic.IRespActorHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespActorHeartBeat message, length delimited. Does not implicitly {@link Basic.RespActorHeartBeat.verify|verify} messages.
         * @param message RespActorHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Basic.IRespActorHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespActorHeartBeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespActorHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Basic.RespActorHeartBeat;

        /**
         * Decodes a RespActorHeartBeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespActorHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Basic.RespActorHeartBeat;

        /**
         * Verifies a RespActorHeartBeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespActorHeartBeat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespActorHeartBeat
         */
        public static fromObject(object: { [k: string]: any }): Basic.RespActorHeartBeat;

        /**
         * Creates a plain object from a RespActorHeartBeat message. Also converts values to other types if specified.
         * @param message RespActorHeartBeat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Basic.RespActorHeartBeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespActorHeartBeat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespActorHeartBeat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace common. */
export namespace common {

    /** ResultCode enum. */
    enum ResultCode {
        Success = 0,
        Failed = 1
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo RoleName */
        RoleName?: (string|null);

        /** UserInfo RoleId */
        RoleId?: (number|Long|null);

        /** UserInfo Level */
        Level?: (number|null);

        /** UserInfo CreateTime */
        CreateTime?: (number|Long|null);

        /** UserInfo VipLevel */
        VipLevel?: (number|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUserInfo);

        /** UserInfo RoleName. */
        public RoleName: string;

        /** UserInfo RoleId. */
        public RoleId: (number|Long);

        /** UserInfo Level. */
        public Level: number;

        /** UserInfo CreateTime. */
        public CreateTime: (number|Long);

        /** UserInfo VipLevel. */
        public VipLevel: number;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: common.IUserInfo): common.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link common.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link common.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): common.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** PhoneType enum. */
    enum PhoneType {
        MOBILE = 0,
        HOME = 1,
        WORK = 2
    }

    /** Properties of a PhoneNumber. */
    interface IPhoneNumber {

        /** PhoneNumber number */
        number?: (string|null);

        /** PhoneNumber type */
        type?: (common.PhoneType|null);
    }

    /** Represents a PhoneNumber. */
    class PhoneNumber implements IPhoneNumber {

        /**
         * Constructs a new PhoneNumber.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPhoneNumber);

        /** PhoneNumber number. */
        public number: string;

        /** PhoneNumber type. */
        public type: common.PhoneType;

        /**
         * Creates a new PhoneNumber instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PhoneNumber instance
         */
        public static create(properties?: common.IPhoneNumber): common.PhoneNumber;

        /**
         * Encodes the specified PhoneNumber message. Does not implicitly {@link common.PhoneNumber.verify|verify} messages.
         * @param message PhoneNumber message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPhoneNumber, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PhoneNumber message, length delimited. Does not implicitly {@link common.PhoneNumber.verify|verify} messages.
         * @param message PhoneNumber message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IPhoneNumber, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PhoneNumber message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PhoneNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.PhoneNumber;

        /**
         * Decodes a PhoneNumber message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PhoneNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.PhoneNumber;

        /**
         * Verifies a PhoneNumber message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PhoneNumber message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PhoneNumber
         */
        public static fromObject(object: { [k: string]: any }): common.PhoneNumber;

        /**
         * Creates a plain object from a PhoneNumber message. Also converts values to other types if specified.
         * @param message PhoneNumber
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.PhoneNumber, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PhoneNumber to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PhoneNumber
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Person. */
    interface IPerson {

        /** Person name */
        name?: (string|null);

        /** Person id */
        id?: (number|null);

        /** Person email */
        email?: (string|null);

        /** Person phones */
        phones?: (common.IPhoneNumber[]|null);
    }

    /** Represents a Person. */
    class Person implements IPerson {

        /**
         * Constructs a new Person.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPerson);

        /** Person name. */
        public name: string;

        /** Person id. */
        public id: number;

        /** Person email. */
        public email: string;

        /** Person phones. */
        public phones: common.IPhoneNumber[];

        /**
         * Creates a new Person instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Person instance
         */
        public static create(properties?: common.IPerson): common.Person;

        /**
         * Encodes the specified Person message. Does not implicitly {@link common.Person.verify|verify} messages.
         * @param message Person message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPerson, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Person message, length delimited. Does not implicitly {@link common.Person.verify|verify} messages.
         * @param message Person message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IPerson, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Person message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Person;

        /**
         * Decodes a Person message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Person;

        /**
         * Verifies a Person message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Person message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Person
         */
        public static fromObject(object: { [k: string]: any }): common.Person;

        /**
         * Creates a plain object from a Person message. Also converts values to other types if specified.
         * @param message Person
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Person, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Person to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Person
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddressBook. */
    interface IAddressBook {

        /** AddressBook people */
        people?: (common.IPerson[]|null);
    }

    /** Represents an AddressBook. */
    class AddressBook implements IAddressBook {

        /**
         * Constructs a new AddressBook.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAddressBook);

        /** AddressBook people. */
        public people: common.IPerson[];

        /**
         * Creates a new AddressBook instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddressBook instance
         */
        public static create(properties?: common.IAddressBook): common.AddressBook;

        /**
         * Encodes the specified AddressBook message. Does not implicitly {@link common.AddressBook.verify|verify} messages.
         * @param message AddressBook message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAddressBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddressBook message, length delimited. Does not implicitly {@link common.AddressBook.verify|verify} messages.
         * @param message AddressBook message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAddressBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddressBook message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.AddressBook;

        /**
         * Decodes an AddressBook message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.AddressBook;

        /**
         * Verifies an AddressBook message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddressBook message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddressBook
         */
        public static fromObject(object: { [k: string]: any }): common.AddressBook;

        /**
         * Creates a plain object from an AddressBook message. Also converts values to other types if specified.
         * @param message AddressBook
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.AddressBook, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddressBook to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddressBook
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace user. */
export namespace user {

    /** Properties of a ReqLogin. */
    interface IReqLogin {

        /** ReqLogin UserName */
        UserName?: (string|null);

        /** ReqLogin Platform */
        Platform?: (string|null);

        /** ReqLogin SdkType */
        SdkType?: (number|null);

        /** ReqLogin SdkToken */
        SdkToken?: (string|null);

        /** ReqLogin Device */
        Device?: (string|null);

        /** ReqLogin Password */
        Password?: (string|null);
    }

    /** Represents a ReqLogin. */
    class ReqLogin implements IReqLogin {

        /**
         * Constructs a new ReqLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IReqLogin);

        /** ReqLogin UserName. */
        public UserName: string;

        /** ReqLogin Platform. */
        public Platform: string;

        /** ReqLogin SdkType. */
        public SdkType: number;

        /** ReqLogin SdkToken. */
        public SdkToken: string;

        /** ReqLogin Device. */
        public Device: string;

        /** ReqLogin Password. */
        public Password: string;

        /**
         * Creates a new ReqLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLogin instance
         */
        public static create(properties?: user.IReqLogin): user.ReqLogin;

        /**
         * Encodes the specified ReqLogin message. Does not implicitly {@link user.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link user.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.ReqLogin;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.ReqLogin;

        /**
         * Verifies a ReqLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqLogin
         */
        public static fromObject(object: { [k: string]: any }): user.ReqLogin;

        /**
         * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
         * @param message ReqLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.ReqLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespLogin. */
    interface IRespLogin {

        /** RespLogin Code */
        Code?: (number|null);

        /** RespLogin UserInfo */
        UserInfo?: (common.IUserInfo|null);
    }

    /** Represents a RespLogin. */
    class RespLogin implements IRespLogin {

        /**
         * Constructs a new RespLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRespLogin);

        /** RespLogin Code. */
        public Code: number;

        /** RespLogin UserInfo. */
        public UserInfo?: (common.IUserInfo|null);

        /**
         * Creates a new RespLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespLogin instance
         */
        public static create(properties?: user.IRespLogin): user.RespLogin;

        /**
         * Encodes the specified RespLogin message. Does not implicitly {@link user.RespLogin.verify|verify} messages.
         * @param message RespLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRespLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespLogin message, length delimited. Does not implicitly {@link user.RespLogin.verify|verify} messages.
         * @param message RespLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRespLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RespLogin;

        /**
         * Decodes a RespLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RespLogin;

        /**
         * Verifies a RespLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespLogin
         */
        public static fromObject(object: { [k: string]: any }): user.RespLogin;

        /**
         * Creates a plain object from a RespLogin message. Also converts values to other types if specified.
         * @param message RespLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RespLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespErrorCode. */
    interface IRespErrorCode {

        /** RespErrorCode ErrCode */
        ErrCode?: (number|Long|null);

        /** RespErrorCode Desc */
        Desc?: (string|null);
    }

    /** Represents a RespErrorCode. */
    class RespErrorCode implements IRespErrorCode {

        /**
         * Constructs a new RespErrorCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRespErrorCode);

        /** RespErrorCode ErrCode. */
        public ErrCode: (number|Long);

        /** RespErrorCode Desc. */
        public Desc: string;

        /**
         * Creates a new RespErrorCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespErrorCode instance
         */
        public static create(properties?: user.IRespErrorCode): user.RespErrorCode;

        /**
         * Encodes the specified RespErrorCode message. Does not implicitly {@link user.RespErrorCode.verify|verify} messages.
         * @param message RespErrorCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRespErrorCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespErrorCode message, length delimited. Does not implicitly {@link user.RespErrorCode.verify|verify} messages.
         * @param message RespErrorCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRespErrorCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespErrorCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespErrorCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RespErrorCode;

        /**
         * Decodes a RespErrorCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespErrorCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RespErrorCode;

        /**
         * Verifies a RespErrorCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespErrorCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespErrorCode
         */
        public static fromObject(object: { [k: string]: any }): user.RespErrorCode;

        /**
         * Creates a plain object from a RespErrorCode message. Also converts values to other types if specified.
         * @param message RespErrorCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RespErrorCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespErrorCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespErrorCode
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespPrompt. */
    interface IRespPrompt {

        /** RespPrompt Type */
        Type?: (number|null);

        /** RespPrompt Content */
        Content?: (string|null);
    }

    /** Represents a RespPrompt. */
    class RespPrompt implements IRespPrompt {

        /**
         * Constructs a new RespPrompt.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRespPrompt);

        /** RespPrompt Type. */
        public Type: number;

        /** RespPrompt Content. */
        public Content: string;

        /**
         * Creates a new RespPrompt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespPrompt instance
         */
        public static create(properties?: user.IRespPrompt): user.RespPrompt;

        /**
         * Encodes the specified RespPrompt message. Does not implicitly {@link user.RespPrompt.verify|verify} messages.
         * @param message RespPrompt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRespPrompt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespPrompt message, length delimited. Does not implicitly {@link user.RespPrompt.verify|verify} messages.
         * @param message RespPrompt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRespPrompt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespPrompt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespPrompt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RespPrompt;

        /**
         * Decodes a RespPrompt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespPrompt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RespPrompt;

        /**
         * Verifies a RespPrompt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespPrompt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespPrompt
         */
        public static fromObject(object: { [k: string]: any }): user.RespPrompt;

        /**
         * Creates a plain object from a RespPrompt message. Also converts values to other types if specified.
         * @param message RespPrompt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RespPrompt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespPrompt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespPrompt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

}
export default protobuf;
