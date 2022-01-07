import * as $protobuf from "protobufjs";
/** Properties of a Backup. */
export interface IBackup {

    /** Backup wallets */
    wallets?: (IWallet[]|null);

    /** Backup lnd */
    lnd?: (ILND|null);

    /** Backup omniBolt */
    omniBolt?: (IOmniBolt|null);

    /** Backup timestampUtc */
    timestampUtc?: (number|Long|null);
}

/** Represents a Backup. */
export class Backup implements IBackup {

    /**
     * Constructs a new Backup.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBackup);

    /** Backup wallets. */
    public wallets: IWallet[];

    /** Backup lnd. */
    public lnd?: (ILND|null);

    /** Backup omniBolt. */
    public omniBolt?: (IOmniBolt|null);

    /** Backup timestampUtc. */
    public timestampUtc: (number|Long);

    /**
     * Creates a new Backup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Backup instance
     */
    public static create(properties?: IBackup): Backup;

    /**
     * Encodes the specified Backup message. Does not implicitly {@link Backup.verify|verify} messages.
     * @param message Backup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Backup message, length delimited. Does not implicitly {@link Backup.verify|verify} messages.
     * @param message Backup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Backup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Backup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Backup;

    /**
     * Decodes a Backup message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Backup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Backup;

    /**
     * Verifies a Backup message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Backup message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Backup
     */
    public static fromObject(object: { [k: string]: any }): Backup;

    /**
     * Creates a plain object from a Backup message. Also converts values to other types if specified.
     * @param message Backup
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Backup to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Wallet. */
export interface IWallet {

    /** Wallet key */
    key?: (string|null);

    /** Wallet mnemonic */
    mnemonic?: (string|null);

    /** Wallet passphrase */
    passphrase?: (string|null);

    /** Wallet keyDerivationPath */
    keyDerivationPath?: (Wallet.IKeyDerivationPath|null);

    /** Wallet addressType */
    addressType?: (Wallet.AddressType|null);
}

/** Represents a Wallet. */
export class Wallet implements IWallet {

    /**
     * Constructs a new Wallet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWallet);

    /** Wallet key. */
    public key: string;

    /** Wallet mnemonic. */
    public mnemonic: string;

    /** Wallet passphrase. */
    public passphrase: string;

    /** Wallet keyDerivationPath. */
    public keyDerivationPath?: (Wallet.IKeyDerivationPath|null);

    /** Wallet addressType. */
    public addressType: Wallet.AddressType;

    /**
     * Creates a new Wallet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Wallet instance
     */
    public static create(properties?: IWallet): Wallet;

    /**
     * Encodes the specified Wallet message. Does not implicitly {@link Wallet.verify|verify} messages.
     * @param message Wallet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWallet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Wallet message, length delimited. Does not implicitly {@link Wallet.verify|verify} messages.
     * @param message Wallet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWallet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Wallet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Wallet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wallet;

    /**
     * Decodes a Wallet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Wallet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wallet;

    /**
     * Verifies a Wallet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Wallet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Wallet
     */
    public static fromObject(object: { [k: string]: any }): Wallet;

    /**
     * Creates a plain object from a Wallet message. Also converts values to other types if specified.
     * @param message Wallet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Wallet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Wallet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Wallet {

    /** Properties of a KeyDerivationPath. */
    interface IKeyDerivationPath {

        /** KeyDerivationPath purpose */
        purpose?: (string|null);

        /** KeyDerivationPath coinType */
        coinType?: (string|null);

        /** KeyDerivationPath account */
        account?: (string|null);

        /** KeyDerivationPath change */
        change?: (string|null);

        /** KeyDerivationPath addressIndex */
        addressIndex?: (string|null);
    }

    /** Represents a KeyDerivationPath. */
    class KeyDerivationPath implements IKeyDerivationPath {

        /**
         * Constructs a new KeyDerivationPath.
         * @param [properties] Properties to set
         */
        constructor(properties?: Wallet.IKeyDerivationPath);

        /** KeyDerivationPath purpose. */
        public purpose: string;

        /** KeyDerivationPath coinType. */
        public coinType: string;

        /** KeyDerivationPath account. */
        public account: string;

        /** KeyDerivationPath change. */
        public change: string;

        /** KeyDerivationPath addressIndex. */
        public addressIndex: string;

        /**
         * Creates a new KeyDerivationPath instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyDerivationPath instance
         */
        public static create(properties?: Wallet.IKeyDerivationPath): Wallet.KeyDerivationPath;

        /**
         * Encodes the specified KeyDerivationPath message. Does not implicitly {@link Wallet.KeyDerivationPath.verify|verify} messages.
         * @param message KeyDerivationPath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Wallet.IKeyDerivationPath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyDerivationPath message, length delimited. Does not implicitly {@link Wallet.KeyDerivationPath.verify|verify} messages.
         * @param message KeyDerivationPath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Wallet.IKeyDerivationPath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyDerivationPath message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyDerivationPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wallet.KeyDerivationPath;

        /**
         * Decodes a KeyDerivationPath message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyDerivationPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wallet.KeyDerivationPath;

        /**
         * Verifies a KeyDerivationPath message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyDerivationPath message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyDerivationPath
         */
        public static fromObject(object: { [k: string]: any }): Wallet.KeyDerivationPath;

        /**
         * Creates a plain object from a KeyDerivationPath message. Also converts values to other types if specified.
         * @param message KeyDerivationPath
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Wallet.KeyDerivationPath, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyDerivationPath to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** AddressType enum. */
    enum AddressType {
        p2wpkh = 0,
        p2sh = 1,
        p2pkh = 2
    }
}

/** Properties of a LND. */
export interface ILND {

    /** LND seed */
    seed?: (string|null);

    /** LND multiChanBackup */
    multiChanBackup?: (string|null);
}

/** Represents a LND. */
export class LND implements ILND {

    /**
     * Constructs a new LND.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILND);

    /** LND seed. */
    public seed: string;

    /** LND multiChanBackup. */
    public multiChanBackup: string;

    /**
     * Creates a new LND instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LND instance
     */
    public static create(properties?: ILND): LND;

    /**
     * Encodes the specified LND message. Does not implicitly {@link LND.verify|verify} messages.
     * @param message LND message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILND, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LND message, length delimited. Does not implicitly {@link LND.verify|verify} messages.
     * @param message LND message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILND, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LND message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LND
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LND;

    /**
     * Decodes a LND message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LND
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LND;

    /**
     * Verifies a LND message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LND message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LND
     */
    public static fromObject(object: { [k: string]: any }): LND;

    /**
     * Creates a plain object from a LND message. Also converts values to other types if specified.
     * @param message LND
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LND, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LND to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OmniBolt. */
export interface IOmniBolt {

    /** OmniBolt mnemonics */
    mnemonics?: (string[]|null);

    /** OmniBolt walletStore */
    walletStore?: (string|null);
}

/** Represents an OmniBolt. */
export class OmniBolt implements IOmniBolt {

    /**
     * Constructs a new OmniBolt.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOmniBolt);

    /** OmniBolt mnemonics. */
    public mnemonics: string[];

    /** OmniBolt walletStore. */
    public walletStore: string;

    /**
     * Creates a new OmniBolt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OmniBolt instance
     */
    public static create(properties?: IOmniBolt): OmniBolt;

    /**
     * Encodes the specified OmniBolt message. Does not implicitly {@link OmniBolt.verify|verify} messages.
     * @param message OmniBolt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOmniBolt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OmniBolt message, length delimited. Does not implicitly {@link OmniBolt.verify|verify} messages.
     * @param message OmniBolt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOmniBolt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OmniBolt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OmniBolt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OmniBolt;

    /**
     * Decodes an OmniBolt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OmniBolt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OmniBolt;

    /**
     * Verifies an OmniBolt message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OmniBolt message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OmniBolt
     */
    public static fromObject(object: { [k: string]: any }): OmniBolt;

    /**
     * Creates a plain object from an OmniBolt message. Also converts values to other types if specified.
     * @param message OmniBolt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OmniBolt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OmniBolt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
