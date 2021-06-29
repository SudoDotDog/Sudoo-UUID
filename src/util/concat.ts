/**
 * @author WMXPY
 * @namespace UUID
 * @description Concat
 */

export const concatUUID = (
    first: string, // 8
    second: string, // 4
    third: string, // 4
    fourth: string, // 4
    fifth: string, // 12
): string => {

    return [
        first.padStart(8, '0'),
        second.padStart(4, '0'),
        third.padStart(4, '0'),
        fourth.padStart(4, '0'),
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        fifth.padStart(12, '0'),
    ].join('-');
};

export const splitUUID = (uuid: string): [string, string, string, string, string] => {

    const splited: string[] = uuid.split('-');
    return [
        splited[0],
        splited[1],
        splited[2],
        splited[3],
        splited[4],
    ];
};
