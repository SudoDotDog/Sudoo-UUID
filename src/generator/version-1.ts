/**
 * @author WMXPY
 * @namespace UUID_Generator
 * @description Version 1
 */

import { convertByteArrayToHex, convertNumberArrayToHex } from "../convert";
import { UUIDTimeComponents } from "../declare";
import { createUUIDRandom, createUUIDSequence } from "../random";
import { createUUIDTimeComponents } from "../time";

export type UUIDVersion1GeneratorOptions = {
};

export class UUIDVersion1Generator {

    public static create(options: UUIDVersion1GeneratorOptions = {}): UUIDVersion1Generator {

        return new UUIDVersion1Generator(options);
    }

    private readonly _options: UUIDVersion1GeneratorOptions;

    private constructor(options: UUIDVersion1GeneratorOptions) {

        this._options = options;
    }

    public generate(date: Date = new Date()): string {

        const timeComponents: UUIDTimeComponents = createUUIDTimeComponents(date);

        const timeLow: string = convertByteArrayToHex(timeComponents.low);
        const timeMedium: string = convertByteArrayToHex(timeComponents.medium);
        const timeHighAndVersion: string = convertByteArrayToHex(timeComponents.highAndVersion);

        const sequence: Uint8Array = createUUIDSequence();
        const sequenceString: string = convertByteArrayToHex(sequence);

        const randomNode: number = createUUIDRandom(6);
        const randomNodeString: string = convertNumberArrayToHex(randomNode);

        return `${timeLow}-${timeMedium}-${timeHighAndVersion}-${sequenceString}-${randomNodeString}`;
    }
}
