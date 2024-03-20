/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = window.protobuf;
$protobuf.roots.default=window;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Bag = (function() {

    /**
     * Namespace Bag.
     * @exports Bag
     * @namespace
     */
    var Bag = {};

    Bag.ReqBagInfo = (function() {

        /**
         * Properties of a ReqBagInfo.
         * @memberof Bag
         * @interface IReqBagInfo
         */

        /**
         * Constructs a new ReqBagInfo.
         * @memberof Bag
         * @classdesc Represents a ReqBagInfo.
         * @implements IReqBagInfo
         * @constructor
         * @param {Bag.IReqBagInfo=} [properties] Properties to set
         */
        function ReqBagInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqBagInfo instance using the specified properties.
         * @function create
         * @memberof Bag.ReqBagInfo
         * @static
         * @param {Bag.IReqBagInfo=} [properties] Properties to set
         * @returns {Bag.ReqBagInfo} ReqBagInfo instance
         */
        ReqBagInfo.create = function create(properties) {
            return new ReqBagInfo(properties);
        };

        /**
         * Encodes the specified ReqBagInfo message. Does not implicitly {@link Bag.ReqBagInfo.verify|verify} messages.
         * @function encode
         * @memberof Bag.ReqBagInfo
         * @static
         * @param {Bag.IReqBagInfo} message ReqBagInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBagInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqBagInfo message, length delimited. Does not implicitly {@link Bag.ReqBagInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Bag.ReqBagInfo
         * @static
         * @param {Bag.IReqBagInfo} message ReqBagInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBagInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqBagInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Bag.ReqBagInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Bag.ReqBagInfo} ReqBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBagInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bag.ReqBagInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqBagInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Bag.ReqBagInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Bag.ReqBagInfo} ReqBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBagInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqBagInfo message.
         * @function verify
         * @memberof Bag.ReqBagInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqBagInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqBagInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Bag.ReqBagInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Bag.ReqBagInfo} ReqBagInfo
         */
        ReqBagInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Bag.ReqBagInfo)
                return object;
            return new $root.Bag.ReqBagInfo();
        };

        /**
         * Creates a plain object from a ReqBagInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Bag.ReqBagInfo
         * @static
         * @param {Bag.ReqBagInfo} message ReqBagInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqBagInfo.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqBagInfo to JSON.
         * @function toJSON
         * @memberof Bag.ReqBagInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqBagInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqBagInfo
         * @function getTypeUrl
         * @memberof Bag.ReqBagInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqBagInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Bag.ReqBagInfo";
        };

        return ReqBagInfo;
    })();

    Bag.ResBagInfo = (function() {

        /**
         * Properties of a ResBagInfo.
         * @memberof Bag
         * @interface IResBagInfo
         * @property {Object.<string,number|Long>|null} [ItemDic] ResBagInfo ItemDic
         */

        /**
         * Constructs a new ResBagInfo.
         * @memberof Bag
         * @classdesc Represents a ResBagInfo.
         * @implements IResBagInfo
         * @constructor
         * @param {Bag.IResBagInfo=} [properties] Properties to set
         */
        function ResBagInfo(properties) {
            this.ItemDic = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResBagInfo ItemDic.
         * @member {Object.<string,number|Long>} ItemDic
         * @memberof Bag.ResBagInfo
         * @instance
         */
        ResBagInfo.prototype.ItemDic = $util.emptyObject;

        /**
         * Creates a new ResBagInfo instance using the specified properties.
         * @function create
         * @memberof Bag.ResBagInfo
         * @static
         * @param {Bag.IResBagInfo=} [properties] Properties to set
         * @returns {Bag.ResBagInfo} ResBagInfo instance
         */
        ResBagInfo.create = function create(properties) {
            return new ResBagInfo(properties);
        };

        /**
         * Encodes the specified ResBagInfo message. Does not implicitly {@link Bag.ResBagInfo.verify|verify} messages.
         * @function encode
         * @memberof Bag.ResBagInfo
         * @static
         * @param {Bag.IResBagInfo} message ResBagInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResBagInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ItemDic != null && Object.hasOwnProperty.call(message, "ItemDic"))
                for (var keys = Object.keys(message.ItemDic), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.ItemDic[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResBagInfo message, length delimited. Does not implicitly {@link Bag.ResBagInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Bag.ResBagInfo
         * @static
         * @param {Bag.IResBagInfo} message ResBagInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResBagInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResBagInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Bag.ResBagInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Bag.ResBagInfo} ResBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResBagInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bag.ResBagInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.ItemDic === $util.emptyObject)
                            message.ItemDic = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int64();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.ItemDic[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResBagInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Bag.ResBagInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Bag.ResBagInfo} ResBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResBagInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResBagInfo message.
         * @function verify
         * @memberof Bag.ResBagInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResBagInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ItemDic != null && message.hasOwnProperty("ItemDic")) {
                if (!$util.isObject(message.ItemDic))
                    return "ItemDic: object expected";
                var key = Object.keys(message.ItemDic);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "ItemDic: integer key{k:int32} expected";
                    if (!$util.isInteger(message.ItemDic[key[i]]) && !(message.ItemDic[key[i]] && $util.isInteger(message.ItemDic[key[i]].low) && $util.isInteger(message.ItemDic[key[i]].high)))
                        return "ItemDic: integer|Long{k:int32} expected";
                }
            }
            return null;
        };

        /**
         * Creates a ResBagInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Bag.ResBagInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Bag.ResBagInfo} ResBagInfo
         */
        ResBagInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Bag.ResBagInfo)
                return object;
            var message = new $root.Bag.ResBagInfo();
            if (object.ItemDic) {
                if (typeof object.ItemDic !== "object")
                    throw TypeError(".Bag.ResBagInfo.ItemDic: object expected");
                message.ItemDic = {};
                for (var keys = Object.keys(object.ItemDic), i = 0; i < keys.length; ++i)
                    if ($util.Long)
                        (message.ItemDic[keys[i]] = $util.Long.fromValue(object.ItemDic[keys[i]])).unsigned = false;
                    else if (typeof object.ItemDic[keys[i]] === "string")
                        message.ItemDic[keys[i]] = parseInt(object.ItemDic[keys[i]], 10);
                    else if (typeof object.ItemDic[keys[i]] === "number")
                        message.ItemDic[keys[i]] = object.ItemDic[keys[i]];
                    else if (typeof object.ItemDic[keys[i]] === "object")
                        message.ItemDic[keys[i]] = new $util.LongBits(object.ItemDic[keys[i]].low >>> 0, object.ItemDic[keys[i]].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a ResBagInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Bag.ResBagInfo
         * @static
         * @param {Bag.ResBagInfo} message ResBagInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResBagInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.ItemDic = {};
            var keys2;
            if (message.ItemDic && (keys2 = Object.keys(message.ItemDic)).length) {
                object.ItemDic = {};
                for (var j = 0; j < keys2.length; ++j)
                    if (typeof message.ItemDic[keys2[j]] === "number")
                        object.ItemDic[keys2[j]] = options.longs === String ? String(message.ItemDic[keys2[j]]) : message.ItemDic[keys2[j]];
                    else
                        object.ItemDic[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.ItemDic[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.ItemDic[keys2[j]].low >>> 0, message.ItemDic[keys2[j]].high >>> 0).toNumber() : message.ItemDic[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this ResBagInfo to JSON.
         * @function toJSON
         * @memberof Bag.ResBagInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResBagInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResBagInfo
         * @function getTypeUrl
         * @memberof Bag.ResBagInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResBagInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Bag.ResBagInfo";
        };

        return ResBagInfo;
    })();

    Bag.ReqComposePet = (function() {

        /**
         * Properties of a ReqComposePet.
         * @memberof Bag
         * @interface IReqComposePet
         * @property {number|null} [FragmentId] ReqComposePet FragmentId
         */

        /**
         * Constructs a new ReqComposePet.
         * @memberof Bag
         * @classdesc Represents a ReqComposePet.
         * @implements IReqComposePet
         * @constructor
         * @param {Bag.IReqComposePet=} [properties] Properties to set
         */
        function ReqComposePet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqComposePet FragmentId.
         * @member {number} FragmentId
         * @memberof Bag.ReqComposePet
         * @instance
         */
        ReqComposePet.prototype.FragmentId = 0;

        /**
         * Creates a new ReqComposePet instance using the specified properties.
         * @function create
         * @memberof Bag.ReqComposePet
         * @static
         * @param {Bag.IReqComposePet=} [properties] Properties to set
         * @returns {Bag.ReqComposePet} ReqComposePet instance
         */
        ReqComposePet.create = function create(properties) {
            return new ReqComposePet(properties);
        };

        /**
         * Encodes the specified ReqComposePet message. Does not implicitly {@link Bag.ReqComposePet.verify|verify} messages.
         * @function encode
         * @memberof Bag.ReqComposePet
         * @static
         * @param {Bag.IReqComposePet} message ReqComposePet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqComposePet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FragmentId != null && Object.hasOwnProperty.call(message, "FragmentId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FragmentId);
            return writer;
        };

        /**
         * Encodes the specified ReqComposePet message, length delimited. Does not implicitly {@link Bag.ReqComposePet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Bag.ReqComposePet
         * @static
         * @param {Bag.IReqComposePet} message ReqComposePet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqComposePet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqComposePet message from the specified reader or buffer.
         * @function decode
         * @memberof Bag.ReqComposePet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Bag.ReqComposePet} ReqComposePet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqComposePet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bag.ReqComposePet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.FragmentId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqComposePet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Bag.ReqComposePet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Bag.ReqComposePet} ReqComposePet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqComposePet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqComposePet message.
         * @function verify
         * @memberof Bag.ReqComposePet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqComposePet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FragmentId != null && message.hasOwnProperty("FragmentId"))
                if (!$util.isInteger(message.FragmentId))
                    return "FragmentId: integer expected";
            return null;
        };

        /**
         * Creates a ReqComposePet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Bag.ReqComposePet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Bag.ReqComposePet} ReqComposePet
         */
        ReqComposePet.fromObject = function fromObject(object) {
            if (object instanceof $root.Bag.ReqComposePet)
                return object;
            var message = new $root.Bag.ReqComposePet();
            if (object.FragmentId != null)
                message.FragmentId = object.FragmentId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqComposePet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Bag.ReqComposePet
         * @static
         * @param {Bag.ReqComposePet} message ReqComposePet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqComposePet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.FragmentId = 0;
            if (message.FragmentId != null && message.hasOwnProperty("FragmentId"))
                object.FragmentId = message.FragmentId;
            return object;
        };

        /**
         * Converts this ReqComposePet to JSON.
         * @function toJSON
         * @memberof Bag.ReqComposePet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqComposePet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqComposePet
         * @function getTypeUrl
         * @memberof Bag.ReqComposePet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqComposePet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Bag.ReqComposePet";
        };

        return ReqComposePet;
    })();

    Bag.ResComposePet = (function() {

        /**
         * Properties of a ResComposePet.
         * @memberof Bag
         * @interface IResComposePet
         * @property {number|null} [PetId] ResComposePet PetId
         */

        /**
         * Constructs a new ResComposePet.
         * @memberof Bag
         * @classdesc Represents a ResComposePet.
         * @implements IResComposePet
         * @constructor
         * @param {Bag.IResComposePet=} [properties] Properties to set
         */
        function ResComposePet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResComposePet PetId.
         * @member {number} PetId
         * @memberof Bag.ResComposePet
         * @instance
         */
        ResComposePet.prototype.PetId = 0;

        /**
         * Creates a new ResComposePet instance using the specified properties.
         * @function create
         * @memberof Bag.ResComposePet
         * @static
         * @param {Bag.IResComposePet=} [properties] Properties to set
         * @returns {Bag.ResComposePet} ResComposePet instance
         */
        ResComposePet.create = function create(properties) {
            return new ResComposePet(properties);
        };

        /**
         * Encodes the specified ResComposePet message. Does not implicitly {@link Bag.ResComposePet.verify|verify} messages.
         * @function encode
         * @memberof Bag.ResComposePet
         * @static
         * @param {Bag.IResComposePet} message ResComposePet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResComposePet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PetId != null && Object.hasOwnProperty.call(message, "PetId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PetId);
            return writer;
        };

        /**
         * Encodes the specified ResComposePet message, length delimited. Does not implicitly {@link Bag.ResComposePet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Bag.ResComposePet
         * @static
         * @param {Bag.IResComposePet} message ResComposePet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResComposePet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResComposePet message from the specified reader or buffer.
         * @function decode
         * @memberof Bag.ResComposePet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Bag.ResComposePet} ResComposePet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResComposePet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bag.ResComposePet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.PetId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResComposePet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Bag.ResComposePet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Bag.ResComposePet} ResComposePet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResComposePet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResComposePet message.
         * @function verify
         * @memberof Bag.ResComposePet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResComposePet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PetId != null && message.hasOwnProperty("PetId"))
                if (!$util.isInteger(message.PetId))
                    return "PetId: integer expected";
            return null;
        };

        /**
         * Creates a ResComposePet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Bag.ResComposePet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Bag.ResComposePet} ResComposePet
         */
        ResComposePet.fromObject = function fromObject(object) {
            if (object instanceof $root.Bag.ResComposePet)
                return object;
            var message = new $root.Bag.ResComposePet();
            if (object.PetId != null)
                message.PetId = object.PetId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ResComposePet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Bag.ResComposePet
         * @static
         * @param {Bag.ResComposePet} message ResComposePet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResComposePet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.PetId = 0;
            if (message.PetId != null && message.hasOwnProperty("PetId"))
                object.PetId = message.PetId;
            return object;
        };

        /**
         * Converts this ResComposePet to JSON.
         * @function toJSON
         * @memberof Bag.ResComposePet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResComposePet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResComposePet
         * @function getTypeUrl
         * @memberof Bag.ResComposePet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResComposePet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Bag.ResComposePet";
        };

        return ResComposePet;
    })();

    Bag.ReqUseItem = (function() {

        /**
         * Properties of a ReqUseItem.
         * @memberof Bag
         * @interface IReqUseItem
         * @property {number|null} [ItemId] ReqUseItem ItemId
         */

        /**
         * Constructs a new ReqUseItem.
         * @memberof Bag
         * @classdesc Represents a ReqUseItem.
         * @implements IReqUseItem
         * @constructor
         * @param {Bag.IReqUseItem=} [properties] Properties to set
         */
        function ReqUseItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqUseItem ItemId.
         * @member {number} ItemId
         * @memberof Bag.ReqUseItem
         * @instance
         */
        ReqUseItem.prototype.ItemId = 0;

        /**
         * Creates a new ReqUseItem instance using the specified properties.
         * @function create
         * @memberof Bag.ReqUseItem
         * @static
         * @param {Bag.IReqUseItem=} [properties] Properties to set
         * @returns {Bag.ReqUseItem} ReqUseItem instance
         */
        ReqUseItem.create = function create(properties) {
            return new ReqUseItem(properties);
        };

        /**
         * Encodes the specified ReqUseItem message. Does not implicitly {@link Bag.ReqUseItem.verify|verify} messages.
         * @function encode
         * @memberof Bag.ReqUseItem
         * @static
         * @param {Bag.IReqUseItem} message ReqUseItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUseItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ItemId != null && Object.hasOwnProperty.call(message, "ItemId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ItemId);
            return writer;
        };

        /**
         * Encodes the specified ReqUseItem message, length delimited. Does not implicitly {@link Bag.ReqUseItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Bag.ReqUseItem
         * @static
         * @param {Bag.IReqUseItem} message ReqUseItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUseItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqUseItem message from the specified reader or buffer.
         * @function decode
         * @memberof Bag.ReqUseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Bag.ReqUseItem} ReqUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUseItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bag.ReqUseItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ItemId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqUseItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Bag.ReqUseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Bag.ReqUseItem} ReqUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUseItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqUseItem message.
         * @function verify
         * @memberof Bag.ReqUseItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqUseItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ItemId != null && message.hasOwnProperty("ItemId"))
                if (!$util.isInteger(message.ItemId))
                    return "ItemId: integer expected";
            return null;
        };

        /**
         * Creates a ReqUseItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Bag.ReqUseItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Bag.ReqUseItem} ReqUseItem
         */
        ReqUseItem.fromObject = function fromObject(object) {
            if (object instanceof $root.Bag.ReqUseItem)
                return object;
            var message = new $root.Bag.ReqUseItem();
            if (object.ItemId != null)
                message.ItemId = object.ItemId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqUseItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Bag.ReqUseItem
         * @static
         * @param {Bag.ReqUseItem} message ReqUseItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqUseItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ItemId = 0;
            if (message.ItemId != null && message.hasOwnProperty("ItemId"))
                object.ItemId = message.ItemId;
            return object;
        };

        /**
         * Converts this ReqUseItem to JSON.
         * @function toJSON
         * @memberof Bag.ReqUseItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqUseItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqUseItem
         * @function getTypeUrl
         * @memberof Bag.ReqUseItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqUseItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Bag.ReqUseItem";
        };

        return ReqUseItem;
    })();

    Bag.ReqSellItem = (function() {

        /**
         * Properties of a ReqSellItem.
         * @memberof Bag
         * @interface IReqSellItem
         * @property {number|null} [ItemId] ReqSellItem ItemId
         */

        /**
         * Constructs a new ReqSellItem.
         * @memberof Bag
         * @classdesc Represents a ReqSellItem.
         * @implements IReqSellItem
         * @constructor
         * @param {Bag.IReqSellItem=} [properties] Properties to set
         */
        function ReqSellItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSellItem ItemId.
         * @member {number} ItemId
         * @memberof Bag.ReqSellItem
         * @instance
         */
        ReqSellItem.prototype.ItemId = 0;

        /**
         * Creates a new ReqSellItem instance using the specified properties.
         * @function create
         * @memberof Bag.ReqSellItem
         * @static
         * @param {Bag.IReqSellItem=} [properties] Properties to set
         * @returns {Bag.ReqSellItem} ReqSellItem instance
         */
        ReqSellItem.create = function create(properties) {
            return new ReqSellItem(properties);
        };

        /**
         * Encodes the specified ReqSellItem message. Does not implicitly {@link Bag.ReqSellItem.verify|verify} messages.
         * @function encode
         * @memberof Bag.ReqSellItem
         * @static
         * @param {Bag.IReqSellItem} message ReqSellItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSellItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ItemId != null && Object.hasOwnProperty.call(message, "ItemId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ItemId);
            return writer;
        };

        /**
         * Encodes the specified ReqSellItem message, length delimited. Does not implicitly {@link Bag.ReqSellItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Bag.ReqSellItem
         * @static
         * @param {Bag.IReqSellItem} message ReqSellItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSellItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqSellItem message from the specified reader or buffer.
         * @function decode
         * @memberof Bag.ReqSellItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Bag.ReqSellItem} ReqSellItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSellItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bag.ReqSellItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ItemId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqSellItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Bag.ReqSellItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Bag.ReqSellItem} ReqSellItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSellItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqSellItem message.
         * @function verify
         * @memberof Bag.ReqSellItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqSellItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ItemId != null && message.hasOwnProperty("ItemId"))
                if (!$util.isInteger(message.ItemId))
                    return "ItemId: integer expected";
            return null;
        };

        /**
         * Creates a ReqSellItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Bag.ReqSellItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Bag.ReqSellItem} ReqSellItem
         */
        ReqSellItem.fromObject = function fromObject(object) {
            if (object instanceof $root.Bag.ReqSellItem)
                return object;
            var message = new $root.Bag.ReqSellItem();
            if (object.ItemId != null)
                message.ItemId = object.ItemId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqSellItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Bag.ReqSellItem
         * @static
         * @param {Bag.ReqSellItem} message ReqSellItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqSellItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ItemId = 0;
            if (message.ItemId != null && message.hasOwnProperty("ItemId"))
                object.ItemId = message.ItemId;
            return object;
        };

        /**
         * Converts this ReqSellItem to JSON.
         * @function toJSON
         * @memberof Bag.ReqSellItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqSellItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqSellItem
         * @function getTypeUrl
         * @memberof Bag.ReqSellItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqSellItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Bag.ReqSellItem";
        };

        return ReqSellItem;
    })();

    Bag.ResItemChange = (function() {

        /**
         * Properties of a ResItemChange.
         * @memberof Bag
         * @interface IResItemChange
         * @property {Object.<string,number|Long>|null} [ItemDic] ResItemChange ItemDic
         */

        /**
         * Constructs a new ResItemChange.
         * @memberof Bag
         * @classdesc Represents a ResItemChange.
         * @implements IResItemChange
         * @constructor
         * @param {Bag.IResItemChange=} [properties] Properties to set
         */
        function ResItemChange(properties) {
            this.ItemDic = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResItemChange ItemDic.
         * @member {Object.<string,number|Long>} ItemDic
         * @memberof Bag.ResItemChange
         * @instance
         */
        ResItemChange.prototype.ItemDic = $util.emptyObject;

        /**
         * Creates a new ResItemChange instance using the specified properties.
         * @function create
         * @memberof Bag.ResItemChange
         * @static
         * @param {Bag.IResItemChange=} [properties] Properties to set
         * @returns {Bag.ResItemChange} ResItemChange instance
         */
        ResItemChange.create = function create(properties) {
            return new ResItemChange(properties);
        };

        /**
         * Encodes the specified ResItemChange message. Does not implicitly {@link Bag.ResItemChange.verify|verify} messages.
         * @function encode
         * @memberof Bag.ResItemChange
         * @static
         * @param {Bag.IResItemChange} message ResItemChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResItemChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ItemDic != null && Object.hasOwnProperty.call(message, "ItemDic"))
                for (var keys = Object.keys(message.ItemDic), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.ItemDic[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResItemChange message, length delimited. Does not implicitly {@link Bag.ResItemChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Bag.ResItemChange
         * @static
         * @param {Bag.IResItemChange} message ResItemChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResItemChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResItemChange message from the specified reader or buffer.
         * @function decode
         * @memberof Bag.ResItemChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Bag.ResItemChange} ResItemChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResItemChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bag.ResItemChange(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.ItemDic === $util.emptyObject)
                            message.ItemDic = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int64();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.ItemDic[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResItemChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Bag.ResItemChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Bag.ResItemChange} ResItemChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResItemChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResItemChange message.
         * @function verify
         * @memberof Bag.ResItemChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResItemChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ItemDic != null && message.hasOwnProperty("ItemDic")) {
                if (!$util.isObject(message.ItemDic))
                    return "ItemDic: object expected";
                var key = Object.keys(message.ItemDic);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "ItemDic: integer key{k:int32} expected";
                    if (!$util.isInteger(message.ItemDic[key[i]]) && !(message.ItemDic[key[i]] && $util.isInteger(message.ItemDic[key[i]].low) && $util.isInteger(message.ItemDic[key[i]].high)))
                        return "ItemDic: integer|Long{k:int32} expected";
                }
            }
            return null;
        };

        /**
         * Creates a ResItemChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Bag.ResItemChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Bag.ResItemChange} ResItemChange
         */
        ResItemChange.fromObject = function fromObject(object) {
            if (object instanceof $root.Bag.ResItemChange)
                return object;
            var message = new $root.Bag.ResItemChange();
            if (object.ItemDic) {
                if (typeof object.ItemDic !== "object")
                    throw TypeError(".Bag.ResItemChange.ItemDic: object expected");
                message.ItemDic = {};
                for (var keys = Object.keys(object.ItemDic), i = 0; i < keys.length; ++i)
                    if ($util.Long)
                        (message.ItemDic[keys[i]] = $util.Long.fromValue(object.ItemDic[keys[i]])).unsigned = false;
                    else if (typeof object.ItemDic[keys[i]] === "string")
                        message.ItemDic[keys[i]] = parseInt(object.ItemDic[keys[i]], 10);
                    else if (typeof object.ItemDic[keys[i]] === "number")
                        message.ItemDic[keys[i]] = object.ItemDic[keys[i]];
                    else if (typeof object.ItemDic[keys[i]] === "object")
                        message.ItemDic[keys[i]] = new $util.LongBits(object.ItemDic[keys[i]].low >>> 0, object.ItemDic[keys[i]].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a ResItemChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Bag.ResItemChange
         * @static
         * @param {Bag.ResItemChange} message ResItemChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResItemChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.ItemDic = {};
            var keys2;
            if (message.ItemDic && (keys2 = Object.keys(message.ItemDic)).length) {
                object.ItemDic = {};
                for (var j = 0; j < keys2.length; ++j)
                    if (typeof message.ItemDic[keys2[j]] === "number")
                        object.ItemDic[keys2[j]] = options.longs === String ? String(message.ItemDic[keys2[j]]) : message.ItemDic[keys2[j]];
                    else
                        object.ItemDic[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.ItemDic[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.ItemDic[keys2[j]].low >>> 0, message.ItemDic[keys2[j]].high >>> 0).toNumber() : message.ItemDic[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this ResItemChange to JSON.
         * @function toJSON
         * @memberof Bag.ResItemChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResItemChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResItemChange
         * @function getTypeUrl
         * @memberof Bag.ResItemChange
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResItemChange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Bag.ResItemChange";
        };

        return ResItemChange;
    })();

    return Bag;
})();

$root.Basic = (function() {

    /**
     * Namespace Basic.
     * @exports Basic
     * @namespace
     */
    var Basic = {};

    Basic.ReqHeartBeat = (function() {

        /**
         * Properties of a ReqHeartBeat.
         * @memberof Basic
         * @interface IReqHeartBeat
         * @property {number|Long|null} [Timestamp] ReqHeartBeat Timestamp
         */

        /**
         * Constructs a new ReqHeartBeat.
         * @memberof Basic
         * @classdesc Represents a ReqHeartBeat.
         * @implements IReqHeartBeat
         * @constructor
         * @param {Basic.IReqHeartBeat=} [properties] Properties to set
         */
        function ReqHeartBeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqHeartBeat Timestamp.
         * @member {number|Long} Timestamp
         * @memberof Basic.ReqHeartBeat
         * @instance
         */
        ReqHeartBeat.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReqHeartBeat instance using the specified properties.
         * @function create
         * @memberof Basic.ReqHeartBeat
         * @static
         * @param {Basic.IReqHeartBeat=} [properties] Properties to set
         * @returns {Basic.ReqHeartBeat} ReqHeartBeat instance
         */
        ReqHeartBeat.create = function create(properties) {
            return new ReqHeartBeat(properties);
        };

        /**
         * Encodes the specified ReqHeartBeat message. Does not implicitly {@link Basic.ReqHeartBeat.verify|verify} messages.
         * @function encode
         * @memberof Basic.ReqHeartBeat
         * @static
         * @param {Basic.IReqHeartBeat} message ReqHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqHeartBeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified ReqHeartBeat message, length delimited. Does not implicitly {@link Basic.ReqHeartBeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Basic.ReqHeartBeat
         * @static
         * @param {Basic.IReqHeartBeat} message ReqHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqHeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqHeartBeat message from the specified reader or buffer.
         * @function decode
         * @memberof Basic.ReqHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Basic.ReqHeartBeat} ReqHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqHeartBeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Basic.ReqHeartBeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqHeartBeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Basic.ReqHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Basic.ReqHeartBeat} ReqHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqHeartBeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqHeartBeat message.
         * @function verify
         * @memberof Basic.ReqHeartBeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqHeartBeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a ReqHeartBeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Basic.ReqHeartBeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Basic.ReqHeartBeat} ReqHeartBeat
         */
        ReqHeartBeat.fromObject = function fromObject(object) {
            if (object instanceof $root.Basic.ReqHeartBeat)
                return object;
            var message = new $root.Basic.ReqHeartBeat();
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ReqHeartBeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Basic.ReqHeartBeat
         * @static
         * @param {Basic.ReqHeartBeat} message ReqHeartBeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqHeartBeat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        /**
         * Converts this ReqHeartBeat to JSON.
         * @function toJSON
         * @memberof Basic.ReqHeartBeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqHeartBeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqHeartBeat
         * @function getTypeUrl
         * @memberof Basic.ReqHeartBeat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqHeartBeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Basic.ReqHeartBeat";
        };

        return ReqHeartBeat;
    })();

    Basic.RespHeartBeat = (function() {

        /**
         * Properties of a RespHeartBeat.
         * @memberof Basic
         * @interface IRespHeartBeat
         * @property {number|Long|null} [Timestamp] RespHeartBeat Timestamp
         */

        /**
         * Constructs a new RespHeartBeat.
         * @memberof Basic
         * @classdesc Represents a RespHeartBeat.
         * @implements IRespHeartBeat
         * @constructor
         * @param {Basic.IRespHeartBeat=} [properties] Properties to set
         */
        function RespHeartBeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespHeartBeat Timestamp.
         * @member {number|Long} Timestamp
         * @memberof Basic.RespHeartBeat
         * @instance
         */
        RespHeartBeat.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RespHeartBeat instance using the specified properties.
         * @function create
         * @memberof Basic.RespHeartBeat
         * @static
         * @param {Basic.IRespHeartBeat=} [properties] Properties to set
         * @returns {Basic.RespHeartBeat} RespHeartBeat instance
         */
        RespHeartBeat.create = function create(properties) {
            return new RespHeartBeat(properties);
        };

        /**
         * Encodes the specified RespHeartBeat message. Does not implicitly {@link Basic.RespHeartBeat.verify|verify} messages.
         * @function encode
         * @memberof Basic.RespHeartBeat
         * @static
         * @param {Basic.IRespHeartBeat} message RespHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespHeartBeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified RespHeartBeat message, length delimited. Does not implicitly {@link Basic.RespHeartBeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Basic.RespHeartBeat
         * @static
         * @param {Basic.IRespHeartBeat} message RespHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespHeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespHeartBeat message from the specified reader or buffer.
         * @function decode
         * @memberof Basic.RespHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Basic.RespHeartBeat} RespHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespHeartBeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Basic.RespHeartBeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespHeartBeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Basic.RespHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Basic.RespHeartBeat} RespHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespHeartBeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespHeartBeat message.
         * @function verify
         * @memberof Basic.RespHeartBeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespHeartBeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a RespHeartBeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Basic.RespHeartBeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Basic.RespHeartBeat} RespHeartBeat
         */
        RespHeartBeat.fromObject = function fromObject(object) {
            if (object instanceof $root.Basic.RespHeartBeat)
                return object;
            var message = new $root.Basic.RespHeartBeat();
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RespHeartBeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Basic.RespHeartBeat
         * @static
         * @param {Basic.RespHeartBeat} message RespHeartBeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespHeartBeat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        /**
         * Converts this RespHeartBeat to JSON.
         * @function toJSON
         * @memberof Basic.RespHeartBeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespHeartBeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespHeartBeat
         * @function getTypeUrl
         * @memberof Basic.RespHeartBeat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespHeartBeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Basic.RespHeartBeat";
        };

        return RespHeartBeat;
    })();

    Basic.ReqActorHeartBeat = (function() {

        /**
         * Properties of a ReqActorHeartBeat.
         * @memberof Basic
         * @interface IReqActorHeartBeat
         * @property {number|Long|null} [Timestamp] ReqActorHeartBeat Timestamp
         */

        /**
         * Constructs a new ReqActorHeartBeat.
         * @memberof Basic
         * @classdesc Represents a ReqActorHeartBeat.
         * @implements IReqActorHeartBeat
         * @constructor
         * @param {Basic.IReqActorHeartBeat=} [properties] Properties to set
         */
        function ReqActorHeartBeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqActorHeartBeat Timestamp.
         * @member {number|Long} Timestamp
         * @memberof Basic.ReqActorHeartBeat
         * @instance
         */
        ReqActorHeartBeat.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReqActorHeartBeat instance using the specified properties.
         * @function create
         * @memberof Basic.ReqActorHeartBeat
         * @static
         * @param {Basic.IReqActorHeartBeat=} [properties] Properties to set
         * @returns {Basic.ReqActorHeartBeat} ReqActorHeartBeat instance
         */
        ReqActorHeartBeat.create = function create(properties) {
            return new ReqActorHeartBeat(properties);
        };

        /**
         * Encodes the specified ReqActorHeartBeat message. Does not implicitly {@link Basic.ReqActorHeartBeat.verify|verify} messages.
         * @function encode
         * @memberof Basic.ReqActorHeartBeat
         * @static
         * @param {Basic.IReqActorHeartBeat} message ReqActorHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqActorHeartBeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified ReqActorHeartBeat message, length delimited. Does not implicitly {@link Basic.ReqActorHeartBeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Basic.ReqActorHeartBeat
         * @static
         * @param {Basic.IReqActorHeartBeat} message ReqActorHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqActorHeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqActorHeartBeat message from the specified reader or buffer.
         * @function decode
         * @memberof Basic.ReqActorHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Basic.ReqActorHeartBeat} ReqActorHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqActorHeartBeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Basic.ReqActorHeartBeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqActorHeartBeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Basic.ReqActorHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Basic.ReqActorHeartBeat} ReqActorHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqActorHeartBeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqActorHeartBeat message.
         * @function verify
         * @memberof Basic.ReqActorHeartBeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqActorHeartBeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a ReqActorHeartBeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Basic.ReqActorHeartBeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Basic.ReqActorHeartBeat} ReqActorHeartBeat
         */
        ReqActorHeartBeat.fromObject = function fromObject(object) {
            if (object instanceof $root.Basic.ReqActorHeartBeat)
                return object;
            var message = new $root.Basic.ReqActorHeartBeat();
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ReqActorHeartBeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Basic.ReqActorHeartBeat
         * @static
         * @param {Basic.ReqActorHeartBeat} message ReqActorHeartBeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqActorHeartBeat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        /**
         * Converts this ReqActorHeartBeat to JSON.
         * @function toJSON
         * @memberof Basic.ReqActorHeartBeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqActorHeartBeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqActorHeartBeat
         * @function getTypeUrl
         * @memberof Basic.ReqActorHeartBeat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqActorHeartBeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Basic.ReqActorHeartBeat";
        };

        return ReqActorHeartBeat;
    })();

    Basic.RespActorHeartBeat = (function() {

        /**
         * Properties of a RespActorHeartBeat.
         * @memberof Basic
         * @interface IRespActorHeartBeat
         * @property {number|Long|null} [Timestamp] RespActorHeartBeat Timestamp
         */

        /**
         * Constructs a new RespActorHeartBeat.
         * @memberof Basic
         * @classdesc Represents a RespActorHeartBeat.
         * @implements IRespActorHeartBeat
         * @constructor
         * @param {Basic.IRespActorHeartBeat=} [properties] Properties to set
         */
        function RespActorHeartBeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespActorHeartBeat Timestamp.
         * @member {number|Long} Timestamp
         * @memberof Basic.RespActorHeartBeat
         * @instance
         */
        RespActorHeartBeat.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RespActorHeartBeat instance using the specified properties.
         * @function create
         * @memberof Basic.RespActorHeartBeat
         * @static
         * @param {Basic.IRespActorHeartBeat=} [properties] Properties to set
         * @returns {Basic.RespActorHeartBeat} RespActorHeartBeat instance
         */
        RespActorHeartBeat.create = function create(properties) {
            return new RespActorHeartBeat(properties);
        };

        /**
         * Encodes the specified RespActorHeartBeat message. Does not implicitly {@link Basic.RespActorHeartBeat.verify|verify} messages.
         * @function encode
         * @memberof Basic.RespActorHeartBeat
         * @static
         * @param {Basic.IRespActorHeartBeat} message RespActorHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespActorHeartBeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified RespActorHeartBeat message, length delimited. Does not implicitly {@link Basic.RespActorHeartBeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Basic.RespActorHeartBeat
         * @static
         * @param {Basic.IRespActorHeartBeat} message RespActorHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespActorHeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespActorHeartBeat message from the specified reader or buffer.
         * @function decode
         * @memberof Basic.RespActorHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Basic.RespActorHeartBeat} RespActorHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespActorHeartBeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Basic.RespActorHeartBeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespActorHeartBeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Basic.RespActorHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Basic.RespActorHeartBeat} RespActorHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespActorHeartBeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespActorHeartBeat message.
         * @function verify
         * @memberof Basic.RespActorHeartBeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespActorHeartBeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a RespActorHeartBeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Basic.RespActorHeartBeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Basic.RespActorHeartBeat} RespActorHeartBeat
         */
        RespActorHeartBeat.fromObject = function fromObject(object) {
            if (object instanceof $root.Basic.RespActorHeartBeat)
                return object;
            var message = new $root.Basic.RespActorHeartBeat();
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RespActorHeartBeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Basic.RespActorHeartBeat
         * @static
         * @param {Basic.RespActorHeartBeat} message RespActorHeartBeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespActorHeartBeat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        /**
         * Converts this RespActorHeartBeat to JSON.
         * @function toJSON
         * @memberof Basic.RespActorHeartBeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespActorHeartBeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespActorHeartBeat
         * @function getTypeUrl
         * @memberof Basic.RespActorHeartBeat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespActorHeartBeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Basic.RespActorHeartBeat";
        };

        return RespActorHeartBeat;
    })();

    return Basic;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    /**
     * ResultCode enum.
     * @name common.ResultCode
     * @enum {number}
     * @property {number} Success=0 Success value
     * @property {number} Failed=1 Failed value
     */
    common.ResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Success"] = 0;
        values[valuesById[1] = "Failed"] = 1;
        return values;
    })();

    common.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof common
         * @interface IUserInfo
         * @property {string|null} [RoleName] UserInfo RoleName
         * @property {number|Long|null} [RoleId] UserInfo RoleId
         * @property {number|null} [Level] UserInfo Level
         * @property {number|Long|null} [CreateTime] UserInfo CreateTime
         * @property {number|null} [VipLevel] UserInfo VipLevel
         */

        /**
         * Constructs a new UserInfo.
         * @memberof common
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {common.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo RoleName.
         * @member {string} RoleName
         * @memberof common.UserInfo
         * @instance
         */
        UserInfo.prototype.RoleName = "";

        /**
         * UserInfo RoleId.
         * @member {number|Long} RoleId
         * @memberof common.UserInfo
         * @instance
         */
        UserInfo.prototype.RoleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo Level.
         * @member {number} Level
         * @memberof common.UserInfo
         * @instance
         */
        UserInfo.prototype.Level = 0;

        /**
         * UserInfo CreateTime.
         * @member {number|Long} CreateTime
         * @memberof common.UserInfo
         * @instance
         */
        UserInfo.prototype.CreateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo VipLevel.
         * @member {number} VipLevel
         * @memberof common.UserInfo
         * @instance
         */
        UserInfo.prototype.VipLevel = 0;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof common.UserInfo
         * @static
         * @param {common.IUserInfo=} [properties] Properties to set
         * @returns {common.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link common.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof common.UserInfo
         * @static
         * @param {common.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoleName != null && Object.hasOwnProperty.call(message, "RoleName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RoleName);
            if (message.RoleId != null && Object.hasOwnProperty.call(message, "RoleId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.RoleId);
            if (message.Level != null && Object.hasOwnProperty.call(message, "Level"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Level);
            if (message.CreateTime != null && Object.hasOwnProperty.call(message, "CreateTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.CreateTime);
            if (message.VipLevel != null && Object.hasOwnProperty.call(message, "VipLevel"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.VipLevel);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link common.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.UserInfo
         * @static
         * @param {common.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.RoleName = reader.string();
                        break;
                    }
                case 2: {
                        message.RoleId = reader.int64();
                        break;
                    }
                case 3: {
                        message.Level = reader.int32();
                        break;
                    }
                case 4: {
                        message.CreateTime = reader.int64();
                        break;
                    }
                case 5: {
                        message.VipLevel = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof common.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoleName != null && message.hasOwnProperty("RoleName"))
                if (!$util.isString(message.RoleName))
                    return "RoleName: string expected";
            if (message.RoleId != null && message.hasOwnProperty("RoleId"))
                if (!$util.isInteger(message.RoleId) && !(message.RoleId && $util.isInteger(message.RoleId.low) && $util.isInteger(message.RoleId.high)))
                    return "RoleId: integer|Long expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                if (!$util.isInteger(message.Level))
                    return "Level: integer expected";
            if (message.CreateTime != null && message.hasOwnProperty("CreateTime"))
                if (!$util.isInteger(message.CreateTime) && !(message.CreateTime && $util.isInteger(message.CreateTime.low) && $util.isInteger(message.CreateTime.high)))
                    return "CreateTime: integer|Long expected";
            if (message.VipLevel != null && message.hasOwnProperty("VipLevel"))
                if (!$util.isInteger(message.VipLevel))
                    return "VipLevel: integer expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.UserInfo)
                return object;
            var message = new $root.common.UserInfo();
            if (object.RoleName != null)
                message.RoleName = String(object.RoleName);
            if (object.RoleId != null)
                if ($util.Long)
                    (message.RoleId = $util.Long.fromValue(object.RoleId)).unsigned = false;
                else if (typeof object.RoleId === "string")
                    message.RoleId = parseInt(object.RoleId, 10);
                else if (typeof object.RoleId === "number")
                    message.RoleId = object.RoleId;
                else if (typeof object.RoleId === "object")
                    message.RoleId = new $util.LongBits(object.RoleId.low >>> 0, object.RoleId.high >>> 0).toNumber();
            if (object.Level != null)
                message.Level = object.Level | 0;
            if (object.CreateTime != null)
                if ($util.Long)
                    (message.CreateTime = $util.Long.fromValue(object.CreateTime)).unsigned = false;
                else if (typeof object.CreateTime === "string")
                    message.CreateTime = parseInt(object.CreateTime, 10);
                else if (typeof object.CreateTime === "number")
                    message.CreateTime = object.CreateTime;
                else if (typeof object.CreateTime === "object")
                    message.CreateTime = new $util.LongBits(object.CreateTime.low >>> 0, object.CreateTime.high >>> 0).toNumber();
            if (object.VipLevel != null)
                message.VipLevel = object.VipLevel | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.UserInfo
         * @static
         * @param {common.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RoleName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RoleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RoleId = options.longs === String ? "0" : 0;
                object.Level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CreateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CreateTime = options.longs === String ? "0" : 0;
                object.VipLevel = 0;
            }
            if (message.RoleName != null && message.hasOwnProperty("RoleName"))
                object.RoleName = message.RoleName;
            if (message.RoleId != null && message.hasOwnProperty("RoleId"))
                if (typeof message.RoleId === "number")
                    object.RoleId = options.longs === String ? String(message.RoleId) : message.RoleId;
                else
                    object.RoleId = options.longs === String ? $util.Long.prototype.toString.call(message.RoleId) : options.longs === Number ? new $util.LongBits(message.RoleId.low >>> 0, message.RoleId.high >>> 0).toNumber() : message.RoleId;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            if (message.CreateTime != null && message.hasOwnProperty("CreateTime"))
                if (typeof message.CreateTime === "number")
                    object.CreateTime = options.longs === String ? String(message.CreateTime) : message.CreateTime;
                else
                    object.CreateTime = options.longs === String ? $util.Long.prototype.toString.call(message.CreateTime) : options.longs === Number ? new $util.LongBits(message.CreateTime.low >>> 0, message.CreateTime.high >>> 0).toNumber() : message.CreateTime;
            if (message.VipLevel != null && message.hasOwnProperty("VipLevel"))
                object.VipLevel = message.VipLevel;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof common.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserInfo
         * @function getTypeUrl
         * @memberof common.UserInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.UserInfo";
        };

        return UserInfo;
    })();

    /**
     * PhoneType enum.
     * @name common.PhoneType
     * @enum {number}
     * @property {number} MOBILE=0 MOBILE value
     * @property {number} HOME=1 HOME value
     * @property {number} WORK=2 WORK value
     */
    common.PhoneType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MOBILE"] = 0;
        values[valuesById[1] = "HOME"] = 1;
        values[valuesById[2] = "WORK"] = 2;
        return values;
    })();

    common.PhoneNumber = (function() {

        /**
         * Properties of a PhoneNumber.
         * @memberof common
         * @interface IPhoneNumber
         * @property {string|null} [number] PhoneNumber number
         * @property {common.PhoneType|null} [type] PhoneNumber type
         */

        /**
         * Constructs a new PhoneNumber.
         * @memberof common
         * @classdesc Represents a PhoneNumber.
         * @implements IPhoneNumber
         * @constructor
         * @param {common.IPhoneNumber=} [properties] Properties to set
         */
        function PhoneNumber(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PhoneNumber number.
         * @member {string} number
         * @memberof common.PhoneNumber
         * @instance
         */
        PhoneNumber.prototype.number = "";

        /**
         * PhoneNumber type.
         * @member {common.PhoneType} type
         * @memberof common.PhoneNumber
         * @instance
         */
        PhoneNumber.prototype.type = 0;

        /**
         * Creates a new PhoneNumber instance using the specified properties.
         * @function create
         * @memberof common.PhoneNumber
         * @static
         * @param {common.IPhoneNumber=} [properties] Properties to set
         * @returns {common.PhoneNumber} PhoneNumber instance
         */
        PhoneNumber.create = function create(properties) {
            return new PhoneNumber(properties);
        };

        /**
         * Encodes the specified PhoneNumber message. Does not implicitly {@link common.PhoneNumber.verify|verify} messages.
         * @function encode
         * @memberof common.PhoneNumber
         * @static
         * @param {common.IPhoneNumber} message PhoneNumber message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneNumber.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.number);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified PhoneNumber message, length delimited. Does not implicitly {@link common.PhoneNumber.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.PhoneNumber
         * @static
         * @param {common.IPhoneNumber} message PhoneNumber message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneNumber.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PhoneNumber message from the specified reader or buffer.
         * @function decode
         * @memberof common.PhoneNumber
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.PhoneNumber} PhoneNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneNumber.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.PhoneNumber();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.number = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PhoneNumber message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.PhoneNumber
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.PhoneNumber} PhoneNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneNumber.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PhoneNumber message.
         * @function verify
         * @memberof common.PhoneNumber
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PhoneNumber.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isString(message.number))
                    return "number: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a PhoneNumber message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.PhoneNumber
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.PhoneNumber} PhoneNumber
         */
        PhoneNumber.fromObject = function fromObject(object) {
            if (object instanceof $root.common.PhoneNumber)
                return object;
            var message = new $root.common.PhoneNumber();
            if (object.number != null)
                message.number = String(object.number);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "MOBILE":
            case 0:
                message.type = 0;
                break;
            case "HOME":
            case 1:
                message.type = 1;
                break;
            case "WORK":
            case 2:
                message.type = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a PhoneNumber message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.PhoneNumber
         * @static
         * @param {common.PhoneNumber} message PhoneNumber
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PhoneNumber.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.number = "";
                object.type = options.enums === String ? "MOBILE" : 0;
            }
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.common.PhoneType[message.type] === undefined ? message.type : $root.common.PhoneType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this PhoneNumber to JSON.
         * @function toJSON
         * @memberof common.PhoneNumber
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PhoneNumber.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PhoneNumber
         * @function getTypeUrl
         * @memberof common.PhoneNumber
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PhoneNumber.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.PhoneNumber";
        };

        return PhoneNumber;
    })();

    common.Person = (function() {

        /**
         * Properties of a Person.
         * @memberof common
         * @interface IPerson
         * @property {string|null} [name] Person name
         * @property {number|null} [id] Person id
         * @property {string|null} [email] Person email
         * @property {Array.<common.IPhoneNumber>|null} [phones] Person phones
         */

        /**
         * Constructs a new Person.
         * @memberof common
         * @classdesc Represents a Person.
         * @implements IPerson
         * @constructor
         * @param {common.IPerson=} [properties] Properties to set
         */
        function Person(properties) {
            this.phones = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Person name.
         * @member {string} name
         * @memberof common.Person
         * @instance
         */
        Person.prototype.name = "";

        /**
         * Person id.
         * @member {number} id
         * @memberof common.Person
         * @instance
         */
        Person.prototype.id = 0;

        /**
         * Person email.
         * @member {string} email
         * @memberof common.Person
         * @instance
         */
        Person.prototype.email = "";

        /**
         * Person phones.
         * @member {Array.<common.IPhoneNumber>} phones
         * @memberof common.Person
         * @instance
         */
        Person.prototype.phones = $util.emptyArray;

        /**
         * Creates a new Person instance using the specified properties.
         * @function create
         * @memberof common.Person
         * @static
         * @param {common.IPerson=} [properties] Properties to set
         * @returns {common.Person} Person instance
         */
        Person.create = function create(properties) {
            return new Person(properties);
        };

        /**
         * Encodes the specified Person message. Does not implicitly {@link common.Person.verify|verify} messages.
         * @function encode
         * @memberof common.Person
         * @static
         * @param {common.IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.phones != null && message.phones.length)
                for (var i = 0; i < message.phones.length; ++i)
                    $root.common.PhoneNumber.encode(message.phones[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Person message, length delimited. Does not implicitly {@link common.Person.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Person
         * @static
         * @param {common.IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Person message from the specified reader or buffer.
         * @function decode
         * @memberof common.Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Person();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                case 3: {
                        message.email = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.phones && message.phones.length))
                            message.phones = [];
                        message.phones.push($root.common.PhoneNumber.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Person message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Person message.
         * @function verify
         * @memberof common.Person
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Person.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phones != null && message.hasOwnProperty("phones")) {
                if (!Array.isArray(message.phones))
                    return "phones: array expected";
                for (var i = 0; i < message.phones.length; ++i) {
                    var error = $root.common.PhoneNumber.verify(message.phones[i]);
                    if (error)
                        return "phones." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Person message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Person
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Person} Person
         */
        Person.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Person)
                return object;
            var message = new $root.common.Person();
            if (object.name != null)
                message.name = String(object.name);
            if (object.id != null)
                message.id = object.id | 0;
            if (object.email != null)
                message.email = String(object.email);
            if (object.phones) {
                if (!Array.isArray(object.phones))
                    throw TypeError(".common.Person.phones: array expected");
                message.phones = [];
                for (var i = 0; i < object.phones.length; ++i) {
                    if (typeof object.phones[i] !== "object")
                        throw TypeError(".common.Person.phones: object expected");
                    message.phones[i] = $root.common.PhoneNumber.fromObject(object.phones[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Person message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Person
         * @static
         * @param {common.Person} message Person
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Person.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.phones = [];
            if (options.defaults) {
                object.name = "";
                object.id = 0;
                object.email = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phones && message.phones.length) {
                object.phones = [];
                for (var j = 0; j < message.phones.length; ++j)
                    object.phones[j] = $root.common.PhoneNumber.toObject(message.phones[j], options);
            }
            return object;
        };

        /**
         * Converts this Person to JSON.
         * @function toJSON
         * @memberof common.Person
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Person.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Person
         * @function getTypeUrl
         * @memberof common.Person
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Person.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Person";
        };

        return Person;
    })();

    common.AddressBook = (function() {

        /**
         * Properties of an AddressBook.
         * @memberof common
         * @interface IAddressBook
         * @property {Array.<common.IPerson>|null} [people] AddressBook people
         */

        /**
         * Constructs a new AddressBook.
         * @memberof common
         * @classdesc Represents an AddressBook.
         * @implements IAddressBook
         * @constructor
         * @param {common.IAddressBook=} [properties] Properties to set
         */
        function AddressBook(properties) {
            this.people = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddressBook people.
         * @member {Array.<common.IPerson>} people
         * @memberof common.AddressBook
         * @instance
         */
        AddressBook.prototype.people = $util.emptyArray;

        /**
         * Creates a new AddressBook instance using the specified properties.
         * @function create
         * @memberof common.AddressBook
         * @static
         * @param {common.IAddressBook=} [properties] Properties to set
         * @returns {common.AddressBook} AddressBook instance
         */
        AddressBook.create = function create(properties) {
            return new AddressBook(properties);
        };

        /**
         * Encodes the specified AddressBook message. Does not implicitly {@link common.AddressBook.verify|verify} messages.
         * @function encode
         * @memberof common.AddressBook
         * @static
         * @param {common.IAddressBook} message AddressBook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressBook.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.people != null && message.people.length)
                for (var i = 0; i < message.people.length; ++i)
                    $root.common.Person.encode(message.people[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddressBook message, length delimited. Does not implicitly {@link common.AddressBook.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.AddressBook
         * @static
         * @param {common.IAddressBook} message AddressBook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressBook.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddressBook message from the specified reader or buffer.
         * @function decode
         * @memberof common.AddressBook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.AddressBook} AddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressBook.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.AddressBook();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.people && message.people.length))
                            message.people = [];
                        message.people.push($root.common.Person.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddressBook message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.AddressBook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.AddressBook} AddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressBook.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddressBook message.
         * @function verify
         * @memberof common.AddressBook
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddressBook.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.people != null && message.hasOwnProperty("people")) {
                if (!Array.isArray(message.people))
                    return "people: array expected";
                for (var i = 0; i < message.people.length; ++i) {
                    var error = $root.common.Person.verify(message.people[i]);
                    if (error)
                        return "people." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AddressBook message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.AddressBook
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.AddressBook} AddressBook
         */
        AddressBook.fromObject = function fromObject(object) {
            if (object instanceof $root.common.AddressBook)
                return object;
            var message = new $root.common.AddressBook();
            if (object.people) {
                if (!Array.isArray(object.people))
                    throw TypeError(".common.AddressBook.people: array expected");
                message.people = [];
                for (var i = 0; i < object.people.length; ++i) {
                    if (typeof object.people[i] !== "object")
                        throw TypeError(".common.AddressBook.people: object expected");
                    message.people[i] = $root.common.Person.fromObject(object.people[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AddressBook message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.AddressBook
         * @static
         * @param {common.AddressBook} message AddressBook
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddressBook.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.people = [];
            if (message.people && message.people.length) {
                object.people = [];
                for (var j = 0; j < message.people.length; ++j)
                    object.people[j] = $root.common.Person.toObject(message.people[j], options);
            }
            return object;
        };

        /**
         * Converts this AddressBook to JSON.
         * @function toJSON
         * @memberof common.AddressBook
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddressBook.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddressBook
         * @function getTypeUrl
         * @memberof common.AddressBook
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddressBook.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.AddressBook";
        };

        return AddressBook;
    })();

    return common;
})();

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.ReqLogin = (function() {

        /**
         * Properties of a ReqLogin.
         * @memberof user
         * @interface IReqLogin
         * @property {string|null} [UserName] ReqLogin UserName
         * @property {string|null} [Platform] ReqLogin Platform
         * @property {number|null} [SdkType] ReqLogin SdkType
         * @property {string|null} [SdkToken] ReqLogin SdkToken
         * @property {string|null} [Device] ReqLogin Device
         * @property {string|null} [Password] ReqLogin Password
         */

        /**
         * Constructs a new ReqLogin.
         * @memberof user
         * @classdesc Represents a ReqLogin.
         * @implements IReqLogin
         * @constructor
         * @param {user.IReqLogin=} [properties] Properties to set
         */
        function ReqLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqLogin UserName.
         * @member {string} UserName
         * @memberof user.ReqLogin
         * @instance
         */
        ReqLogin.prototype.UserName = "";

        /**
         * ReqLogin Platform.
         * @member {string} Platform
         * @memberof user.ReqLogin
         * @instance
         */
        ReqLogin.prototype.Platform = "";

        /**
         * ReqLogin SdkType.
         * @member {number} SdkType
         * @memberof user.ReqLogin
         * @instance
         */
        ReqLogin.prototype.SdkType = 0;

        /**
         * ReqLogin SdkToken.
         * @member {string} SdkToken
         * @memberof user.ReqLogin
         * @instance
         */
        ReqLogin.prototype.SdkToken = "";

        /**
         * ReqLogin Device.
         * @member {string} Device
         * @memberof user.ReqLogin
         * @instance
         */
        ReqLogin.prototype.Device = "";

        /**
         * ReqLogin Password.
         * @member {string} Password
         * @memberof user.ReqLogin
         * @instance
         */
        ReqLogin.prototype.Password = "";

        /**
         * Creates a new ReqLogin instance using the specified properties.
         * @function create
         * @memberof user.ReqLogin
         * @static
         * @param {user.IReqLogin=} [properties] Properties to set
         * @returns {user.ReqLogin} ReqLogin instance
         */
        ReqLogin.create = function create(properties) {
            return new ReqLogin(properties);
        };

        /**
         * Encodes the specified ReqLogin message. Does not implicitly {@link user.ReqLogin.verify|verify} messages.
         * @function encode
         * @memberof user.ReqLogin
         * @static
         * @param {user.IReqLogin} message ReqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserName != null && Object.hasOwnProperty.call(message, "UserName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserName);
            if (message.Platform != null && Object.hasOwnProperty.call(message, "Platform"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Platform);
            if (message.SdkType != null && Object.hasOwnProperty.call(message, "SdkType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SdkType);
            if (message.SdkToken != null && Object.hasOwnProperty.call(message, "SdkToken"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.SdkToken);
            if (message.Device != null && Object.hasOwnProperty.call(message, "Device"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Device);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Password);
            return writer;
        };

        /**
         * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link user.ReqLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.ReqLogin
         * @static
         * @param {user.IReqLogin} message ReqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqLogin message from the specified reader or buffer.
         * @function decode
         * @memberof user.ReqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.ReqLogin} ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.ReqLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.UserName = reader.string();
                        break;
                    }
                case 2: {
                        message.Platform = reader.string();
                        break;
                    }
                case 3: {
                        message.SdkType = reader.int32();
                        break;
                    }
                case 4: {
                        message.SdkToken = reader.string();
                        break;
                    }
                case 5: {
                        message.Device = reader.string();
                        break;
                    }
                case 6: {
                        message.Password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.ReqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.ReqLogin} ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqLogin message.
         * @function verify
         * @memberof user.ReqLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                if (!$util.isString(message.UserName))
                    return "UserName: string expected";
            if (message.Platform != null && message.hasOwnProperty("Platform"))
                if (!$util.isString(message.Platform))
                    return "Platform: string expected";
            if (message.SdkType != null && message.hasOwnProperty("SdkType"))
                if (!$util.isInteger(message.SdkType))
                    return "SdkType: integer expected";
            if (message.SdkToken != null && message.hasOwnProperty("SdkToken"))
                if (!$util.isString(message.SdkToken))
                    return "SdkToken: string expected";
            if (message.Device != null && message.hasOwnProperty("Device"))
                if (!$util.isString(message.Device))
                    return "Device: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            return null;
        };

        /**
         * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.ReqLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.ReqLogin} ReqLogin
         */
        ReqLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.user.ReqLogin)
                return object;
            var message = new $root.user.ReqLogin();
            if (object.UserName != null)
                message.UserName = String(object.UserName);
            if (object.Platform != null)
                message.Platform = String(object.Platform);
            if (object.SdkType != null)
                message.SdkType = object.SdkType | 0;
            if (object.SdkToken != null)
                message.SdkToken = String(object.SdkToken);
            if (object.Device != null)
                message.Device = String(object.Device);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.ReqLogin
         * @static
         * @param {user.ReqLogin} message ReqLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserName = "";
                object.Platform = "";
                object.SdkType = 0;
                object.SdkToken = "";
                object.Device = "";
                object.Password = "";
            }
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                object.UserName = message.UserName;
            if (message.Platform != null && message.hasOwnProperty("Platform"))
                object.Platform = message.Platform;
            if (message.SdkType != null && message.hasOwnProperty("SdkType"))
                object.SdkType = message.SdkType;
            if (message.SdkToken != null && message.hasOwnProperty("SdkToken"))
                object.SdkToken = message.SdkToken;
            if (message.Device != null && message.hasOwnProperty("Device"))
                object.Device = message.Device;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            return object;
        };

        /**
         * Converts this ReqLogin to JSON.
         * @function toJSON
         * @memberof user.ReqLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqLogin
         * @function getTypeUrl
         * @memberof user.ReqLogin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.ReqLogin";
        };

        return ReqLogin;
    })();

    user.RespLogin = (function() {

        /**
         * Properties of a RespLogin.
         * @memberof user
         * @interface IRespLogin
         * @property {number|null} [Code] RespLogin Code
         * @property {common.IUserInfo|null} [UserInfo] RespLogin UserInfo
         */

        /**
         * Constructs a new RespLogin.
         * @memberof user
         * @classdesc Represents a RespLogin.
         * @implements IRespLogin
         * @constructor
         * @param {user.IRespLogin=} [properties] Properties to set
         */
        function RespLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespLogin Code.
         * @member {number} Code
         * @memberof user.RespLogin
         * @instance
         */
        RespLogin.prototype.Code = 0;

        /**
         * RespLogin UserInfo.
         * @member {common.IUserInfo|null|undefined} UserInfo
         * @memberof user.RespLogin
         * @instance
         */
        RespLogin.prototype.UserInfo = null;

        /**
         * Creates a new RespLogin instance using the specified properties.
         * @function create
         * @memberof user.RespLogin
         * @static
         * @param {user.IRespLogin=} [properties] Properties to set
         * @returns {user.RespLogin} RespLogin instance
         */
        RespLogin.create = function create(properties) {
            return new RespLogin(properties);
        };

        /**
         * Encodes the specified RespLogin message. Does not implicitly {@link user.RespLogin.verify|verify} messages.
         * @function encode
         * @memberof user.RespLogin
         * @static
         * @param {user.IRespLogin} message RespLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.UserInfo != null && Object.hasOwnProperty.call(message, "UserInfo"))
                $root.common.UserInfo.encode(message.UserInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespLogin message, length delimited. Does not implicitly {@link user.RespLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.RespLogin
         * @static
         * @param {user.IRespLogin} message RespLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespLogin message from the specified reader or buffer.
         * @function decode
         * @memberof user.RespLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.RespLogin} RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.RespLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Code = reader.int32();
                        break;
                    }
                case 2: {
                        message.UserInfo = $root.common.UserInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.RespLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.RespLogin} RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespLogin message.
         * @function verify
         * @memberof user.RespLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                var error = $root.common.UserInfo.verify(message.UserInfo);
                if (error)
                    return "UserInfo." + error;
            }
            return null;
        };

        /**
         * Creates a RespLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.RespLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.RespLogin} RespLogin
         */
        RespLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.user.RespLogin)
                return object;
            var message = new $root.user.RespLogin();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.UserInfo != null) {
                if (typeof object.UserInfo !== "object")
                    throw TypeError(".user.RespLogin.UserInfo: object expected");
                message.UserInfo = $root.common.UserInfo.fromObject(object.UserInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a RespLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.RespLogin
         * @static
         * @param {user.RespLogin} message RespLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.UserInfo = null;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo"))
                object.UserInfo = $root.common.UserInfo.toObject(message.UserInfo, options);
            return object;
        };

        /**
         * Converts this RespLogin to JSON.
         * @function toJSON
         * @memberof user.RespLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespLogin
         * @function getTypeUrl
         * @memberof user.RespLogin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.RespLogin";
        };

        return RespLogin;
    })();

    user.RespErrorCode = (function() {

        /**
         * Properties of a RespErrorCode.
         * @memberof user
         * @interface IRespErrorCode
         * @property {number|Long|null} [ErrCode] RespErrorCode ErrCode
         * @property {string|null} [Desc] RespErrorCode Desc
         */

        /**
         * Constructs a new RespErrorCode.
         * @memberof user
         * @classdesc Represents a RespErrorCode.
         * @implements IRespErrorCode
         * @constructor
         * @param {user.IRespErrorCode=} [properties] Properties to set
         */
        function RespErrorCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespErrorCode ErrCode.
         * @member {number|Long} ErrCode
         * @memberof user.RespErrorCode
         * @instance
         */
        RespErrorCode.prototype.ErrCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RespErrorCode Desc.
         * @member {string} Desc
         * @memberof user.RespErrorCode
         * @instance
         */
        RespErrorCode.prototype.Desc = "";

        /**
         * Creates a new RespErrorCode instance using the specified properties.
         * @function create
         * @memberof user.RespErrorCode
         * @static
         * @param {user.IRespErrorCode=} [properties] Properties to set
         * @returns {user.RespErrorCode} RespErrorCode instance
         */
        RespErrorCode.create = function create(properties) {
            return new RespErrorCode(properties);
        };

        /**
         * Encodes the specified RespErrorCode message. Does not implicitly {@link user.RespErrorCode.verify|verify} messages.
         * @function encode
         * @memberof user.RespErrorCode
         * @static
         * @param {user.IRespErrorCode} message RespErrorCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespErrorCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ErrCode);
            if (message.Desc != null && Object.hasOwnProperty.call(message, "Desc"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Desc);
            return writer;
        };

        /**
         * Encodes the specified RespErrorCode message, length delimited. Does not implicitly {@link user.RespErrorCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.RespErrorCode
         * @static
         * @param {user.IRespErrorCode} message RespErrorCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespErrorCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespErrorCode message from the specified reader or buffer.
         * @function decode
         * @memberof user.RespErrorCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.RespErrorCode} RespErrorCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespErrorCode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.RespErrorCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ErrCode = reader.int64();
                        break;
                    }
                case 2: {
                        message.Desc = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespErrorCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.RespErrorCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.RespErrorCode} RespErrorCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespErrorCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespErrorCode message.
         * @function verify
         * @memberof user.RespErrorCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespErrorCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                if (!$util.isInteger(message.ErrCode) && !(message.ErrCode && $util.isInteger(message.ErrCode.low) && $util.isInteger(message.ErrCode.high)))
                    return "ErrCode: integer|Long expected";
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                if (!$util.isString(message.Desc))
                    return "Desc: string expected";
            return null;
        };

        /**
         * Creates a RespErrorCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.RespErrorCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.RespErrorCode} RespErrorCode
         */
        RespErrorCode.fromObject = function fromObject(object) {
            if (object instanceof $root.user.RespErrorCode)
                return object;
            var message = new $root.user.RespErrorCode();
            if (object.ErrCode != null)
                if ($util.Long)
                    (message.ErrCode = $util.Long.fromValue(object.ErrCode)).unsigned = false;
                else if (typeof object.ErrCode === "string")
                    message.ErrCode = parseInt(object.ErrCode, 10);
                else if (typeof object.ErrCode === "number")
                    message.ErrCode = object.ErrCode;
                else if (typeof object.ErrCode === "object")
                    message.ErrCode = new $util.LongBits(object.ErrCode.low >>> 0, object.ErrCode.high >>> 0).toNumber();
            if (object.Desc != null)
                message.Desc = String(object.Desc);
            return message;
        };

        /**
         * Creates a plain object from a RespErrorCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.RespErrorCode
         * @static
         * @param {user.RespErrorCode} message RespErrorCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespErrorCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ErrCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ErrCode = options.longs === String ? "0" : 0;
                object.Desc = "";
            }
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                if (typeof message.ErrCode === "number")
                    object.ErrCode = options.longs === String ? String(message.ErrCode) : message.ErrCode;
                else
                    object.ErrCode = options.longs === String ? $util.Long.prototype.toString.call(message.ErrCode) : options.longs === Number ? new $util.LongBits(message.ErrCode.low >>> 0, message.ErrCode.high >>> 0).toNumber() : message.ErrCode;
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                object.Desc = message.Desc;
            return object;
        };

        /**
         * Converts this RespErrorCode to JSON.
         * @function toJSON
         * @memberof user.RespErrorCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespErrorCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespErrorCode
         * @function getTypeUrl
         * @memberof user.RespErrorCode
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespErrorCode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.RespErrorCode";
        };

        return RespErrorCode;
    })();

    user.RespPrompt = (function() {

        /**
         * Properties of a RespPrompt.
         * @memberof user
         * @interface IRespPrompt
         * @property {number|null} [Type] RespPrompt Type
         * @property {string|null} [Content] RespPrompt Content
         */

        /**
         * Constructs a new RespPrompt.
         * @memberof user
         * @classdesc Represents a RespPrompt.
         * @implements IRespPrompt
         * @constructor
         * @param {user.IRespPrompt=} [properties] Properties to set
         */
        function RespPrompt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespPrompt Type.
         * @member {number} Type
         * @memberof user.RespPrompt
         * @instance
         */
        RespPrompt.prototype.Type = 0;

        /**
         * RespPrompt Content.
         * @member {string} Content
         * @memberof user.RespPrompt
         * @instance
         */
        RespPrompt.prototype.Content = "";

        /**
         * Creates a new RespPrompt instance using the specified properties.
         * @function create
         * @memberof user.RespPrompt
         * @static
         * @param {user.IRespPrompt=} [properties] Properties to set
         * @returns {user.RespPrompt} RespPrompt instance
         */
        RespPrompt.create = function create(properties) {
            return new RespPrompt(properties);
        };

        /**
         * Encodes the specified RespPrompt message. Does not implicitly {@link user.RespPrompt.verify|verify} messages.
         * @function encode
         * @memberof user.RespPrompt
         * @static
         * @param {user.IRespPrompt} message RespPrompt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespPrompt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified RespPrompt message, length delimited. Does not implicitly {@link user.RespPrompt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.RespPrompt
         * @static
         * @param {user.IRespPrompt} message RespPrompt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespPrompt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespPrompt message from the specified reader or buffer.
         * @function decode
         * @memberof user.RespPrompt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.RespPrompt} RespPrompt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespPrompt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.RespPrompt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Type = reader.int32();
                        break;
                    }
                case 2: {
                        message.Content = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespPrompt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.RespPrompt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.RespPrompt} RespPrompt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespPrompt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespPrompt message.
         * @function verify
         * @memberof user.RespPrompt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespPrompt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        /**
         * Creates a RespPrompt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.RespPrompt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.RespPrompt} RespPrompt
         */
        RespPrompt.fromObject = function fromObject(object) {
            if (object instanceof $root.user.RespPrompt)
                return object;
            var message = new $root.user.RespPrompt();
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a RespPrompt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.RespPrompt
         * @static
         * @param {user.RespPrompt} message RespPrompt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespPrompt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                object.Content = "";
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this RespPrompt to JSON.
         * @function toJSON
         * @memberof user.RespPrompt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespPrompt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RespPrompt
         * @function getTypeUrl
         * @memberof user.RespPrompt
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RespPrompt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.RespPrompt";
        };

        return RespPrompt;
    })();

    return user;
})();

// module.exports = $root;
