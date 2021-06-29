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
