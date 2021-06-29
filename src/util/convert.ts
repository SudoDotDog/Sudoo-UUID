/**
 * @author WMXPY
 * @namespace UUID
 * @description Convert
 */

export const convertByteArrayToHex = (target: Uint8Array): string => {

    const results: string[] = [];
    for (const value of target) {
        results.push(value.toString(16));
    }
    return results.join('');
};

export const convertNumberToHex = (target: number): string => {

    return target.toString(16);
};
