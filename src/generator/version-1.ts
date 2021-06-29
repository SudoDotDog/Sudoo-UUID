/**
 * @author WMXPY
 * @namespace UUID_Generator
 * @description Version 1
 */

import { convertByteArrayToHex, convertNumberArrayToHex } from "../util/convert";
import { UUIDTimeComponents } from "../declare";
import { createUUIDRandom, createUUIDSequence } from "../util/random";
import { createUUIDTimeComponents } from "../util/time";

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

        const timeLow: string = convertByteArrayToHex(timeComponents.low, 8);
        const timeMedium: string = convertByteArrayToHex(timeComponents.medium, 4);
        const timeHighAndVersion: string = convertByteArrayToHex(timeComponents.highAndVersion, 4);

        const sequence: Uint8Array = createUUIDSequence();
        const sequenceString: string = convertByteArrayToHex(sequence, 4);

        const nodeBytes: number = 6;
        const randomNode: number = createUUIDRandom(6);
        const randomNodeString: string = convertNumberArrayToHex(randomNode, nodeBytes * 2);

        return `${timeLow}-${timeMedium}-${timeHighAndVersion}-${sequenceString}-${randomNodeString}`;
    }
}
