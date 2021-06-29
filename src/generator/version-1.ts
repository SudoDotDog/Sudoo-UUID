/**
 * @author WMXPY
 * @namespace UUID_Generator
 * @description Version 1
 */

import { UUIDTimeComponents } from "../declare";
import { convertByteArrayToHex, convertNumberToHex } from "../util/convert";
import { createUUIDRandom, createUUIDSequenceAndVariant } from "../util/random";
import { createUUIDTimeComponents } from "../util/time";
import { UUID } from "../uuid";

export type UUIDVersion1GeneratorOptions = {
};

export const DefaultUUIDVersion1GeneratorOptions: UUIDVersion1GeneratorOptions = {
};

export class UUIDVersion1Generator {

    public static create(options: UUIDVersion1GeneratorOptions = DefaultUUIDVersion1GeneratorOptions): UUIDVersion1Generator {

        return new UUIDVersion1Generator(options);
    }

    private readonly _options: UUIDVersion1GeneratorOptions;

    private constructor(options: UUIDVersion1GeneratorOptions) {

        this._options = options;
    }

    public generate(date: Date = new Date()): UUID {

        // Version 1 0x10
        const timeComponents: UUIDTimeComponents = createUUIDTimeComponents(date, 16);

        const timeLow: string = convertByteArrayToHex(timeComponents.low);
        const timeMedium: string = convertByteArrayToHex(timeComponents.medium);
        const timeHighAndVersion: string = convertByteArrayToHex(timeComponents.highAndVersion);

        // Variant 1 0x80
        const sequence: Uint8Array = createUUIDSequenceAndVariant(128);
        const sequenceString: string = convertByteArrayToHex(sequence);

        const randomNode: number = createUUIDRandom(6);
        const randomNodeString: string = convertNumberToHex(randomNode);

        return UUID.fromComponents(timeLow, timeMedium, timeHighAndVersion, sequenceString, randomNodeString);
    }
}
