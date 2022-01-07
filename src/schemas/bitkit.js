/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Backup = (function() {

    /**
     * Properties of a Backup.
     * @exports IBackup
     * @interface IBackup
     * @property {Array.<IWallet>|null} [wallets] Backup wallets
     * @property {ILND|null} [lnd] Backup lnd
     * @property {IOmniBolt|null} [omniBolt] Backup omniBolt
     * @property {number|Long|null} [timestampUtc] Backup timestampUtc
     */

    /**
     * Constructs a new Backup.
     * @exports Backup
     * @classdesc Represents a Backup.
     * @implements IBackup
     * @constructor
     * @param {IBackup=} [properties] Properties to set
     */
    function Backup(properties) {
        this.wallets = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Backup wallets.
     * @member {Array.<IWallet>} wallets
     * @memberof Backup
     * @instance
     */
    Backup.prototype.wallets = $util.emptyArray;

    /**
     * Backup lnd.
     * @member {ILND|null|undefined} lnd
     * @memberof Backup
     * @instance
     */
    Backup.prototype.lnd = null;

    /**
     * Backup omniBolt.
     * @member {IOmniBolt|null|undefined} omniBolt
     * @memberof Backup
     * @instance
     */
    Backup.prototype.omniBolt = null;

    /**
     * Backup timestampUtc.
     * @member {number|Long} timestampUtc
     * @memberof Backup
     * @instance
     */
    Backup.prototype.timestampUtc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Backup instance using the specified properties.
     * @function create
     * @memberof Backup
     * @static
     * @param {IBackup=} [properties] Properties to set
     * @returns {Backup} Backup instance
     */
    Backup.create = function create(properties) {
        return new Backup(properties);
    };

    /**
     * Encodes the specified Backup message. Does not implicitly {@link Backup.verify|verify} messages.
     * @function encode
     * @memberof Backup
     * @static
     * @param {IBackup} message Backup message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Backup.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.wallets != null && message.wallets.length)
            for (var i = 0; i < message.wallets.length; ++i)
                $root.Wallet.encode(message.wallets[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.lnd != null && Object.hasOwnProperty.call(message, "lnd"))
            $root.LND.encode(message.lnd, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.omniBolt != null && Object.hasOwnProperty.call(message, "omniBolt"))
            $root.OmniBolt.encode(message.omniBolt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.timestampUtc != null && Object.hasOwnProperty.call(message, "timestampUtc"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestampUtc);
        return writer;
    };

    /**
     * Encodes the specified Backup message, length delimited. Does not implicitly {@link Backup.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Backup
     * @static
     * @param {IBackup} message Backup message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Backup.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Backup message from the specified reader or buffer.
     * @function decode
     * @memberof Backup
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Backup} Backup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Backup.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Backup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.wallets && message.wallets.length))
                    message.wallets = [];
                message.wallets.push($root.Wallet.decode(reader, reader.uint32()));
                break;
            case 2:
                message.lnd = $root.LND.decode(reader, reader.uint32());
                break;
            case 3:
                message.omniBolt = $root.OmniBolt.decode(reader, reader.uint32());
                break;
            case 4:
                message.timestampUtc = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Backup message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Backup
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Backup} Backup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Backup.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Backup message.
     * @function verify
     * @memberof Backup
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Backup.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.wallets != null && message.hasOwnProperty("wallets")) {
            if (!Array.isArray(message.wallets))
                return "wallets: array expected";
            for (var i = 0; i < message.wallets.length; ++i) {
                var error = $root.Wallet.verify(message.wallets[i]);
                if (error)
                    return "wallets." + error;
            }
        }
        if (message.lnd != null && message.hasOwnProperty("lnd")) {
            var error = $root.LND.verify(message.lnd);
            if (error)
                return "lnd." + error;
        }
        if (message.omniBolt != null && message.hasOwnProperty("omniBolt")) {
            var error = $root.OmniBolt.verify(message.omniBolt);
            if (error)
                return "omniBolt." + error;
        }
        if (message.timestampUtc != null && message.hasOwnProperty("timestampUtc"))
            if (!$util.isInteger(message.timestampUtc) && !(message.timestampUtc && $util.isInteger(message.timestampUtc.low) && $util.isInteger(message.timestampUtc.high)))
                return "timestampUtc: integer|Long expected";
        return null;
    };

    /**
     * Creates a Backup message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Backup
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Backup} Backup
     */
    Backup.fromObject = function fromObject(object) {
        if (object instanceof $root.Backup)
            return object;
        var message = new $root.Backup();
        if (object.wallets) {
            if (!Array.isArray(object.wallets))
                throw TypeError(".Backup.wallets: array expected");
            message.wallets = [];
            for (var i = 0; i < object.wallets.length; ++i) {
                if (typeof object.wallets[i] !== "object")
                    throw TypeError(".Backup.wallets: object expected");
                message.wallets[i] = $root.Wallet.fromObject(object.wallets[i]);
            }
        }
        if (object.lnd != null) {
            if (typeof object.lnd !== "object")
                throw TypeError(".Backup.lnd: object expected");
            message.lnd = $root.LND.fromObject(object.lnd);
        }
        if (object.omniBolt != null) {
            if (typeof object.omniBolt !== "object")
                throw TypeError(".Backup.omniBolt: object expected");
            message.omniBolt = $root.OmniBolt.fromObject(object.omniBolt);
        }
        if (object.timestampUtc != null)
            if ($util.Long)
                (message.timestampUtc = $util.Long.fromValue(object.timestampUtc)).unsigned = false;
            else if (typeof object.timestampUtc === "string")
                message.timestampUtc = parseInt(object.timestampUtc, 10);
            else if (typeof object.timestampUtc === "number")
                message.timestampUtc = object.timestampUtc;
            else if (typeof object.timestampUtc === "object")
                message.timestampUtc = new $util.LongBits(object.timestampUtc.low >>> 0, object.timestampUtc.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a Backup message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Backup
     * @static
     * @param {Backup} message Backup
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Backup.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.wallets = [];
        if (options.defaults) {
            object.lnd = null;
            object.omniBolt = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestampUtc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestampUtc = options.longs === String ? "0" : 0;
        }
        if (message.wallets && message.wallets.length) {
            object.wallets = [];
            for (var j = 0; j < message.wallets.length; ++j)
                object.wallets[j] = $root.Wallet.toObject(message.wallets[j], options);
        }
        if (message.lnd != null && message.hasOwnProperty("lnd"))
            object.lnd = $root.LND.toObject(message.lnd, options);
        if (message.omniBolt != null && message.hasOwnProperty("omniBolt"))
            object.omniBolt = $root.OmniBolt.toObject(message.omniBolt, options);
        if (message.timestampUtc != null && message.hasOwnProperty("timestampUtc"))
            if (typeof message.timestampUtc === "number")
                object.timestampUtc = options.longs === String ? String(message.timestampUtc) : message.timestampUtc;
            else
                object.timestampUtc = options.longs === String ? $util.Long.prototype.toString.call(message.timestampUtc) : options.longs === Number ? new $util.LongBits(message.timestampUtc.low >>> 0, message.timestampUtc.high >>> 0).toNumber() : message.timestampUtc;
        return object;
    };

    /**
     * Converts this Backup to JSON.
     * @function toJSON
     * @memberof Backup
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Backup.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Backup;
})();

$root.Wallet = (function() {

    /**
     * Properties of a Wallet.
     * @exports IWallet
     * @interface IWallet
     * @property {string|null} [key] Wallet key
     * @property {string|null} [mnemonic] Wallet mnemonic
     * @property {string|null} [passphrase] Wallet passphrase
     * @property {Wallet.IKeyDerivationPath|null} [keyDerivationPath] Wallet keyDerivationPath
     * @property {Wallet.AddressType|null} [addressType] Wallet addressType
     */

    /**
     * Constructs a new Wallet.
     * @exports Wallet
     * @classdesc Represents a Wallet.
     * @implements IWallet
     * @constructor
     * @param {IWallet=} [properties] Properties to set
     */
    function Wallet(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Wallet key.
     * @member {string} key
     * @memberof Wallet
     * @instance
     */
    Wallet.prototype.key = "";

    /**
     * Wallet mnemonic.
     * @member {string} mnemonic
     * @memberof Wallet
     * @instance
     */
    Wallet.prototype.mnemonic = "";

    /**
     * Wallet passphrase.
     * @member {string} passphrase
     * @memberof Wallet
     * @instance
     */
    Wallet.prototype.passphrase = "";

    /**
     * Wallet keyDerivationPath.
     * @member {Wallet.IKeyDerivationPath|null|undefined} keyDerivationPath
     * @memberof Wallet
     * @instance
     */
    Wallet.prototype.keyDerivationPath = null;

    /**
     * Wallet addressType.
     * @member {Wallet.AddressType} addressType
     * @memberof Wallet
     * @instance
     */
    Wallet.prototype.addressType = 0;

    /**
     * Creates a new Wallet instance using the specified properties.
     * @function create
     * @memberof Wallet
     * @static
     * @param {IWallet=} [properties] Properties to set
     * @returns {Wallet} Wallet instance
     */
    Wallet.create = function create(properties) {
        return new Wallet(properties);
    };

    /**
     * Encodes the specified Wallet message. Does not implicitly {@link Wallet.verify|verify} messages.
     * @function encode
     * @memberof Wallet
     * @static
     * @param {IWallet} message Wallet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Wallet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        if (message.mnemonic != null && Object.hasOwnProperty.call(message, "mnemonic"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.mnemonic);
        if (message.passphrase != null && Object.hasOwnProperty.call(message, "passphrase"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.passphrase);
        if (message.keyDerivationPath != null && Object.hasOwnProperty.call(message, "keyDerivationPath"))
            $root.Wallet.KeyDerivationPath.encode(message.keyDerivationPath, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.addressType != null && Object.hasOwnProperty.call(message, "addressType"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.addressType);
        return writer;
    };

    /**
     * Encodes the specified Wallet message, length delimited. Does not implicitly {@link Wallet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Wallet
     * @static
     * @param {IWallet} message Wallet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Wallet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Wallet message from the specified reader or buffer.
     * @function decode
     * @memberof Wallet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Wallet} Wallet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Wallet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wallet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.key = reader.string();
                break;
            case 2:
                message.mnemonic = reader.string();
                break;
            case 3:
                message.passphrase = reader.string();
                break;
            case 4:
                message.keyDerivationPath = $root.Wallet.KeyDerivationPath.decode(reader, reader.uint32());
                break;
            case 5:
                message.addressType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Wallet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Wallet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Wallet} Wallet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Wallet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Wallet message.
     * @function verify
     * @memberof Wallet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Wallet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.mnemonic != null && message.hasOwnProperty("mnemonic"))
            if (!$util.isString(message.mnemonic))
                return "mnemonic: string expected";
        if (message.passphrase != null && message.hasOwnProperty("passphrase"))
            if (!$util.isString(message.passphrase))
                return "passphrase: string expected";
        if (message.keyDerivationPath != null && message.hasOwnProperty("keyDerivationPath")) {
            var error = $root.Wallet.KeyDerivationPath.verify(message.keyDerivationPath);
            if (error)
                return "keyDerivationPath." + error;
        }
        if (message.addressType != null && message.hasOwnProperty("addressType"))
            switch (message.addressType) {
            default:
                return "addressType: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        return null;
    };

    /**
     * Creates a Wallet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Wallet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Wallet} Wallet
     */
    Wallet.fromObject = function fromObject(object) {
        if (object instanceof $root.Wallet)
            return object;
        var message = new $root.Wallet();
        if (object.key != null)
            message.key = String(object.key);
        if (object.mnemonic != null)
            message.mnemonic = String(object.mnemonic);
        if (object.passphrase != null)
            message.passphrase = String(object.passphrase);
        if (object.keyDerivationPath != null) {
            if (typeof object.keyDerivationPath !== "object")
                throw TypeError(".Wallet.keyDerivationPath: object expected");
            message.keyDerivationPath = $root.Wallet.KeyDerivationPath.fromObject(object.keyDerivationPath);
        }
        switch (object.addressType) {
        case "p2wpkh":
        case 0:
            message.addressType = 0;
            break;
        case "p2sh":
        case 1:
            message.addressType = 1;
            break;
        case "p2pkh":
        case 2:
            message.addressType = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a Wallet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Wallet
     * @static
     * @param {Wallet} message Wallet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Wallet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.key = "";
            object.mnemonic = "";
            object.passphrase = "";
            object.keyDerivationPath = null;
            object.addressType = options.enums === String ? "p2wpkh" : 0;
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.mnemonic != null && message.hasOwnProperty("mnemonic"))
            object.mnemonic = message.mnemonic;
        if (message.passphrase != null && message.hasOwnProperty("passphrase"))
            object.passphrase = message.passphrase;
        if (message.keyDerivationPath != null && message.hasOwnProperty("keyDerivationPath"))
            object.keyDerivationPath = $root.Wallet.KeyDerivationPath.toObject(message.keyDerivationPath, options);
        if (message.addressType != null && message.hasOwnProperty("addressType"))
            object.addressType = options.enums === String ? $root.Wallet.AddressType[message.addressType] : message.addressType;
        return object;
    };

    /**
     * Converts this Wallet to JSON.
     * @function toJSON
     * @memberof Wallet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Wallet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    Wallet.KeyDerivationPath = (function() {

        /**
         * Properties of a KeyDerivationPath.
         * @memberof Wallet
         * @interface IKeyDerivationPath
         * @property {string|null} [purpose] KeyDerivationPath purpose
         * @property {string|null} [coinType] KeyDerivationPath coinType
         * @property {string|null} [account] KeyDerivationPath account
         * @property {string|null} [change] KeyDerivationPath change
         * @property {string|null} [addressIndex] KeyDerivationPath addressIndex
         */

        /**
         * Constructs a new KeyDerivationPath.
         * @memberof Wallet
         * @classdesc Represents a KeyDerivationPath.
         * @implements IKeyDerivationPath
         * @constructor
         * @param {Wallet.IKeyDerivationPath=} [properties] Properties to set
         */
        function KeyDerivationPath(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeyDerivationPath purpose.
         * @member {string} purpose
         * @memberof Wallet.KeyDerivationPath
         * @instance
         */
        KeyDerivationPath.prototype.purpose = "";

        /**
         * KeyDerivationPath coinType.
         * @member {string} coinType
         * @memberof Wallet.KeyDerivationPath
         * @instance
         */
        KeyDerivationPath.prototype.coinType = "";

        /**
         * KeyDerivationPath account.
         * @member {string} account
         * @memberof Wallet.KeyDerivationPath
         * @instance
         */
        KeyDerivationPath.prototype.account = "";

        /**
         * KeyDerivationPath change.
         * @member {string} change
         * @memberof Wallet.KeyDerivationPath
         * @instance
         */
        KeyDerivationPath.prototype.change = "";

        /**
         * KeyDerivationPath addressIndex.
         * @member {string} addressIndex
         * @memberof Wallet.KeyDerivationPath
         * @instance
         */
        KeyDerivationPath.prototype.addressIndex = "";

        /**
         * Creates a new KeyDerivationPath instance using the specified properties.
         * @function create
         * @memberof Wallet.KeyDerivationPath
         * @static
         * @param {Wallet.IKeyDerivationPath=} [properties] Properties to set
         * @returns {Wallet.KeyDerivationPath} KeyDerivationPath instance
         */
        KeyDerivationPath.create = function create(properties) {
            return new KeyDerivationPath(properties);
        };

        /**
         * Encodes the specified KeyDerivationPath message. Does not implicitly {@link Wallet.KeyDerivationPath.verify|verify} messages.
         * @function encode
         * @memberof Wallet.KeyDerivationPath
         * @static
         * @param {Wallet.IKeyDerivationPath} message KeyDerivationPath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyDerivationPath.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.purpose != null && Object.hasOwnProperty.call(message, "purpose"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.purpose);
            if (message.coinType != null && Object.hasOwnProperty.call(message, "coinType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.coinType);
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.account);
            if (message.change != null && Object.hasOwnProperty.call(message, "change"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.change);
            if (message.addressIndex != null && Object.hasOwnProperty.call(message, "addressIndex"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.addressIndex);
            return writer;
        };

        /**
         * Encodes the specified KeyDerivationPath message, length delimited. Does not implicitly {@link Wallet.KeyDerivationPath.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Wallet.KeyDerivationPath
         * @static
         * @param {Wallet.IKeyDerivationPath} message KeyDerivationPath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyDerivationPath.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeyDerivationPath message from the specified reader or buffer.
         * @function decode
         * @memberof Wallet.KeyDerivationPath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Wallet.KeyDerivationPath} KeyDerivationPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyDerivationPath.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wallet.KeyDerivationPath();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.purpose = reader.string();
                    break;
                case 2:
                    message.coinType = reader.string();
                    break;
                case 3:
                    message.account = reader.string();
                    break;
                case 4:
                    message.change = reader.string();
                    break;
                case 5:
                    message.addressIndex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KeyDerivationPath message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Wallet.KeyDerivationPath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Wallet.KeyDerivationPath} KeyDerivationPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyDerivationPath.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyDerivationPath message.
         * @function verify
         * @memberof Wallet.KeyDerivationPath
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyDerivationPath.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.purpose != null && message.hasOwnProperty("purpose"))
                if (!$util.isString(message.purpose))
                    return "purpose: string expected";
            if (message.coinType != null && message.hasOwnProperty("coinType"))
                if (!$util.isString(message.coinType))
                    return "coinType: string expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.change != null && message.hasOwnProperty("change"))
                if (!$util.isString(message.change))
                    return "change: string expected";
            if (message.addressIndex != null && message.hasOwnProperty("addressIndex"))
                if (!$util.isString(message.addressIndex))
                    return "addressIndex: string expected";
            return null;
        };

        /**
         * Creates a KeyDerivationPath message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Wallet.KeyDerivationPath
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Wallet.KeyDerivationPath} KeyDerivationPath
         */
        KeyDerivationPath.fromObject = function fromObject(object) {
            if (object instanceof $root.Wallet.KeyDerivationPath)
                return object;
            var message = new $root.Wallet.KeyDerivationPath();
            if (object.purpose != null)
                message.purpose = String(object.purpose);
            if (object.coinType != null)
                message.coinType = String(object.coinType);
            if (object.account != null)
                message.account = String(object.account);
            if (object.change != null)
                message.change = String(object.change);
            if (object.addressIndex != null)
                message.addressIndex = String(object.addressIndex);
            return message;
        };

        /**
         * Creates a plain object from a KeyDerivationPath message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Wallet.KeyDerivationPath
         * @static
         * @param {Wallet.KeyDerivationPath} message KeyDerivationPath
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyDerivationPath.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.purpose = "";
                object.coinType = "";
                object.account = "";
                object.change = "";
                object.addressIndex = "";
            }
            if (message.purpose != null && message.hasOwnProperty("purpose"))
                object.purpose = message.purpose;
            if (message.coinType != null && message.hasOwnProperty("coinType"))
                object.coinType = message.coinType;
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.change != null && message.hasOwnProperty("change"))
                object.change = message.change;
            if (message.addressIndex != null && message.hasOwnProperty("addressIndex"))
                object.addressIndex = message.addressIndex;
            return object;
        };

        /**
         * Converts this KeyDerivationPath to JSON.
         * @function toJSON
         * @memberof Wallet.KeyDerivationPath
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyDerivationPath.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KeyDerivationPath;
    })();

    /**
     * AddressType enum.
     * @name Wallet.AddressType
     * @enum {number}
     * @property {number} p2wpkh=0 p2wpkh value
     * @property {number} p2sh=1 p2sh value
     * @property {number} p2pkh=2 p2pkh value
     */
    Wallet.AddressType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "p2wpkh"] = 0;
        values[valuesById[1] = "p2sh"] = 1;
        values[valuesById[2] = "p2pkh"] = 2;
        return values;
    })();

    return Wallet;
})();

$root.LND = (function() {

    /**
     * Properties of a LND.
     * @exports ILND
     * @interface ILND
     * @property {string|null} [seed] LND seed
     * @property {string|null} [multiChanBackup] LND multiChanBackup
     */

    /**
     * Constructs a new LND.
     * @exports LND
     * @classdesc Represents a LND.
     * @implements ILND
     * @constructor
     * @param {ILND=} [properties] Properties to set
     */
    function LND(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LND seed.
     * @member {string} seed
     * @memberof LND
     * @instance
     */
    LND.prototype.seed = "";

    /**
     * LND multiChanBackup.
     * @member {string} multiChanBackup
     * @memberof LND
     * @instance
     */
    LND.prototype.multiChanBackup = "";

    /**
     * Creates a new LND instance using the specified properties.
     * @function create
     * @memberof LND
     * @static
     * @param {ILND=} [properties] Properties to set
     * @returns {LND} LND instance
     */
    LND.create = function create(properties) {
        return new LND(properties);
    };

    /**
     * Encodes the specified LND message. Does not implicitly {@link LND.verify|verify} messages.
     * @function encode
     * @memberof LND
     * @static
     * @param {ILND} message LND message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LND.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.seed);
        if (message.multiChanBackup != null && Object.hasOwnProperty.call(message, "multiChanBackup"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.multiChanBackup);
        return writer;
    };

    /**
     * Encodes the specified LND message, length delimited. Does not implicitly {@link LND.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LND
     * @static
     * @param {ILND} message LND message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LND.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LND message from the specified reader or buffer.
     * @function decode
     * @memberof LND
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LND} LND
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LND.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LND();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.seed = reader.string();
                break;
            case 2:
                message.multiChanBackup = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LND message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LND
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LND} LND
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LND.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LND message.
     * @function verify
     * @memberof LND
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LND.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.seed != null && message.hasOwnProperty("seed"))
            if (!$util.isString(message.seed))
                return "seed: string expected";
        if (message.multiChanBackup != null && message.hasOwnProperty("multiChanBackup"))
            if (!$util.isString(message.multiChanBackup))
                return "multiChanBackup: string expected";
        return null;
    };

    /**
     * Creates a LND message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LND
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LND} LND
     */
    LND.fromObject = function fromObject(object) {
        if (object instanceof $root.LND)
            return object;
        var message = new $root.LND();
        if (object.seed != null)
            message.seed = String(object.seed);
        if (object.multiChanBackup != null)
            message.multiChanBackup = String(object.multiChanBackup);
        return message;
    };

    /**
     * Creates a plain object from a LND message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LND
     * @static
     * @param {LND} message LND
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LND.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.seed = "";
            object.multiChanBackup = "";
        }
        if (message.seed != null && message.hasOwnProperty("seed"))
            object.seed = message.seed;
        if (message.multiChanBackup != null && message.hasOwnProperty("multiChanBackup"))
            object.multiChanBackup = message.multiChanBackup;
        return object;
    };

    /**
     * Converts this LND to JSON.
     * @function toJSON
     * @memberof LND
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LND.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LND;
})();

$root.OmniBolt = (function() {

    /**
     * Properties of an OmniBolt.
     * @exports IOmniBolt
     * @interface IOmniBolt
     * @property {Array.<string>|null} [mnemonics] OmniBolt mnemonics
     * @property {string|null} [walletStore] OmniBolt walletStore
     */

    /**
     * Constructs a new OmniBolt.
     * @exports OmniBolt
     * @classdesc Represents an OmniBolt.
     * @implements IOmniBolt
     * @constructor
     * @param {IOmniBolt=} [properties] Properties to set
     */
    function OmniBolt(properties) {
        this.mnemonics = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OmniBolt mnemonics.
     * @member {Array.<string>} mnemonics
     * @memberof OmniBolt
     * @instance
     */
    OmniBolt.prototype.mnemonics = $util.emptyArray;

    /**
     * OmniBolt walletStore.
     * @member {string} walletStore
     * @memberof OmniBolt
     * @instance
     */
    OmniBolt.prototype.walletStore = "";

    /**
     * Creates a new OmniBolt instance using the specified properties.
     * @function create
     * @memberof OmniBolt
     * @static
     * @param {IOmniBolt=} [properties] Properties to set
     * @returns {OmniBolt} OmniBolt instance
     */
    OmniBolt.create = function create(properties) {
        return new OmniBolt(properties);
    };

    /**
     * Encodes the specified OmniBolt message. Does not implicitly {@link OmniBolt.verify|verify} messages.
     * @function encode
     * @memberof OmniBolt
     * @static
     * @param {IOmniBolt} message OmniBolt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OmniBolt.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mnemonics != null && message.mnemonics.length)
            for (var i = 0; i < message.mnemonics.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.mnemonics[i]);
        if (message.walletStore != null && Object.hasOwnProperty.call(message, "walletStore"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.walletStore);
        return writer;
    };

    /**
     * Encodes the specified OmniBolt message, length delimited. Does not implicitly {@link OmniBolt.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OmniBolt
     * @static
     * @param {IOmniBolt} message OmniBolt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OmniBolt.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OmniBolt message from the specified reader or buffer.
     * @function decode
     * @memberof OmniBolt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OmniBolt} OmniBolt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OmniBolt.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OmniBolt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.mnemonics && message.mnemonics.length))
                    message.mnemonics = [];
                message.mnemonics.push(reader.string());
                break;
            case 2:
                message.walletStore = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an OmniBolt message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OmniBolt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OmniBolt} OmniBolt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OmniBolt.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OmniBolt message.
     * @function verify
     * @memberof OmniBolt
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OmniBolt.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mnemonics != null && message.hasOwnProperty("mnemonics")) {
            if (!Array.isArray(message.mnemonics))
                return "mnemonics: array expected";
            for (var i = 0; i < message.mnemonics.length; ++i)
                if (!$util.isString(message.mnemonics[i]))
                    return "mnemonics: string[] expected";
        }
        if (message.walletStore != null && message.hasOwnProperty("walletStore"))
            if (!$util.isString(message.walletStore))
                return "walletStore: string expected";
        return null;
    };

    /**
     * Creates an OmniBolt message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OmniBolt
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OmniBolt} OmniBolt
     */
    OmniBolt.fromObject = function fromObject(object) {
        if (object instanceof $root.OmniBolt)
            return object;
        var message = new $root.OmniBolt();
        if (object.mnemonics) {
            if (!Array.isArray(object.mnemonics))
                throw TypeError(".OmniBolt.mnemonics: array expected");
            message.mnemonics = [];
            for (var i = 0; i < object.mnemonics.length; ++i)
                message.mnemonics[i] = String(object.mnemonics[i]);
        }
        if (object.walletStore != null)
            message.walletStore = String(object.walletStore);
        return message;
    };

    /**
     * Creates a plain object from an OmniBolt message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OmniBolt
     * @static
     * @param {OmniBolt} message OmniBolt
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OmniBolt.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.mnemonics = [];
        if (options.defaults)
            object.walletStore = "";
        if (message.mnemonics && message.mnemonics.length) {
            object.mnemonics = [];
            for (var j = 0; j < message.mnemonics.length; ++j)
                object.mnemonics[j] = message.mnemonics[j];
        }
        if (message.walletStore != null && message.hasOwnProperty("walletStore"))
            object.walletStore = message.walletStore;
        return object;
    };

    /**
     * Converts this OmniBolt to JSON.
     * @function toJSON
     * @memberof OmniBolt
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OmniBolt.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OmniBolt;
})();

module.exports = $root;
