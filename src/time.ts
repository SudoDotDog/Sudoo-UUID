/**
 * @author WMXPY
 * @namespace UUID
 * @description Time
 */

import { UUIDTimeComponents } from "./declare";

/* eslint-disable @typescript-eslint/no-magic-numbers, no-bitwise */
export const createUUIDTimeComponents = (date: Date): UUIDTimeComponents => {

    const timeValue: number = date.getTime();
    const nanoSeconds: bigint = BigInt(timeValue) * 10000n + 122192928000000000n;

    const nanoLow: number = Number(nanoSeconds % 0x100000000n);
    const timeLow: Uint8Array = new Uint8Array([
        nanoLow >>> 24 & 0xff,
        nanoLow >>> 16 & 0xff,
        nanoLow >>> 8 & 0xff,
        nanoLow >>> 0 & 0xff,
    ]);

    const nanoMedium: number = Math.floor(Number(nanoSeconds / 0x100000000n)) % 0x10000;
    const timeMedium: Uint8Array = new Uint8Array([
        nanoMedium >>> 8 & 0xff,
        nanoMedium >>> 0 & 0xff,
    ]);

    const nanoHigh: number = Math.floor(Number(nanoSeconds / 0x1000000000000n)) % 0x10000;
    const timeHighAndVersion: Uint8Array = new Uint8Array([
        (nanoHigh >>> 8 & 0xf) | 0x10,
        nanoHigh >>> 0 & 0xff,
    ]);

    return {

        low: timeLow,
        medium: timeMedium,
        highAndVersion: timeHighAndVersion,
    };
};
/* eslint-enable @typescript-eslint/no-magic-numbers, no-bitwise */
