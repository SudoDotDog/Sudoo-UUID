/**
 * @author WMXPY
 * @namespace UUID
 * @description Convert
 */

export const convertByteArrayToHex = (target: Uint8Array, length: number): string => {

    const results: string[] = [];
    for (const value of target) {
        results.push(value.toString(16));
    }
    return results.join('').padStart(length, '0');
};

export const convertNumberArrayToHex = (target: number, length: number): string => {

    return target.toString(16).padStart(length, '0');
};
