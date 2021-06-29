/**
 * @author WMXPY
 * @namespace UUID
 * @description Random
 */

/* eslint-disable @typescript-eslint/no-magic-numbers */
export const createUUIDRandom = (bytes: 2 | 4 | 6): number => {

    switch (bytes) {

        case 2: {

            const value: number = Math.floor(Math.random() * 0xffff);
            return value;
        }
        case 4: {

            const value: number = Math.floor(Math.random() * 0xffffffff);
            return value;
        }
        case 6: {

            const value: number = Math.floor(Math.random() * 0xffffffffffff);
            return value;
        }
    }
    return NaN;
};
/* eslint-enable @typescript-eslint/no-magic-numbers */

/* eslint-disable @typescript-eslint/no-magic-numbers, no-bitwise */
export const createUUIDVersionedRandom = (version: 0x10 | 0x20 | 0x30 | 0x40 | 0x50): Uint8Array => {

    const randomSequence: number = createUUIDRandom(2);
    const sequence: Uint8Array = new Uint8Array([
        (randomSequence >>> 8 & 0xf) | version,
        randomSequence >>> 0 & 0xff,
    ]);
    return sequence;
};
/* eslint-enable @typescript-eslint/no-magic-numbers, no-bitwise */

/* eslint-disable @typescript-eslint/no-magic-numbers, no-bitwise */
export const createUUIDSequenceAndVariant = (variant: 0x80): Uint8Array => {

    const randomSequence: number = createUUIDRandom(2);
    const sequence: Uint8Array = new Uint8Array([
        (randomSequence >>> 8 & 0xf) | variant,
        randomSequence >>> 0 & 0xff,
    ]);
    return sequence;
};
/* eslint-enable @typescript-eslint/no-magic-numbers, no-bitwise */
