/**
 * @author WMXPY
 * @namespace UUID
 * @description UUID
 */

import { convertByteArrayToHex, convertNumberArrayToHex } from "./convert";
import { UUIDTimeComponents } from "./declare";
import { createUUIDRandom, createUUIDSequence } from "./random";
import { createUUIDTimeComponents } from "./time";

export class UUID {

    public generateV1(date: Date = new Date()): string {

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
