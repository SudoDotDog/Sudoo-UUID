/**
 * @author WMXPY
 * @namespace UUID
 * @description Convert
 */

export const convertByteArrayToHex = (target: Uint8Array): string => {

    return String.fromCharCode(...target);
};

export const convertNumberArrayToHex = (target: number): string => {

    return target.toString(16);
};
