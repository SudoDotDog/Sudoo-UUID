/**
 * @author WMXPY
 * @namespace UUID
 * @description UUID
 */

import { concatUUID, splitUUID } from "./util/concat";
import { verifyUUID } from "./verify/common";

export class UUID {

    public static fromStringOrThrow(uuid: string, error?: Error): UUID {

        const instance: UUID | null = this.fromStringOrNull(uuid);

        if (instance === null) {
            if (error) {
                throw error;
            }
            throw new Error(`[Sudoo-UUID] Invalid UUID ${uuid}`);
        }
        return instance;
    }

    public static fromStringOrUndefined(uuid: string): UUID | undefined {

        const instance: UUID | null = this.fromStringOrNull(uuid);

        if (instance === null) {
            return undefined;
        }
        return instance;
    }

    public static fromStringOrNull(uuid: string): UUID | null {

        const verifyResult: boolean = verifyUUID(uuid);
        if (!verifyResult) {
            return null;
        }

        const splited: [string, string, string, string, string] = splitUUID(uuid);

        return new UUID(
            splited[0],
            splited[1],
            splited[2],
            splited[3],
            splited[4],
        );
    }

    public static fromComponents(
        first: string, // 8
        second: string, // 4
        third: string, // 4
        fourth: string, // 4
        fifth: string, // 12
    ): UUID {

        return new UUID(first, second, third, fourth, fifth);
    }

    private readonly _first: string; // 8
    private readonly _second: string; // 4
    private readonly _third: string; // 4
    private readonly _fourth: string; // 4
    private readonly _fifth: string; // 12

    private constructor(
        first: string, // 8
        second: string, // 4
        third: string, // 4
        fourth: string, // 4
        fifth: string, // 12
    ) {

        this._first = first;
        this._second = second;
        this._third = third;
        this._fourth = fourth;
        this._fifth = fifth;
    }

    public toString(): string {

        return concatUUID(
            this._first,
            this._second,
            this._third,
            this._fourth,
            this._fifth,
        );
    }
}
