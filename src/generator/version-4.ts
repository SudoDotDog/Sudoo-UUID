/**
 * @author WMXPY
 * @namespace UUID_Generator
 * @description Version 4
 */

import { convertByteArrayToHex, convertNumberToHex } from "../util/convert";
import { createUUIDRandom, createUUIDSequenceAndVariant, createUUIDVersionedRandom } from "../util/random";
import { UUID } from "../uuid";

export type UUIDVersion4GeneratorOptions = {
};

export const DefaultUUIDVersion4GeneratorOptions: UUIDVersion4GeneratorOptions = {
};

export class UUIDVersion4Generator {

    public static create(options: UUIDVersion4GeneratorOptions = DefaultUUIDVersion4GeneratorOptions): UUIDVersion4Generator {

        return new UUIDVersion4Generator(options);
    }

    private readonly _options: UUIDVersion4GeneratorOptions;

    private constructor(options: UUIDVersion4GeneratorOptions) {

        this._options = options;
    }

    public generate(): UUID {

        const randomFirst: number = createUUIDRandom(4);
        const randomSecond: number = createUUIDRandom(2);
        const randomFirstString: string = convertNumberToHex(randomFirst);
        const randomSecondString: string = convertNumberToHex(randomSecond);

        // Version 4 0x40
        const randomThird: Uint8Array = createUUIDVersionedRandom(64);
        const randomThirdString: string = convertByteArrayToHex(randomThird);

        // Variant 1 0x80
        const sequence: Uint8Array = createUUIDSequenceAndVariant(128);
        const sequenceString: string = convertByteArrayToHex(sequence);

        const randomNode: number = createUUIDRandom(6);
        const randomNodeString: string = convertNumberToHex(randomNode);

        return UUID.fromComponents(randomFirstString, randomSecondString, randomThirdString, sequenceString, randomNodeString);
    }

    public generateString(): string {

        return this.generate().toString();
    }
}
