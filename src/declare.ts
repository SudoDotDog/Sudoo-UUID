/**
 * @author WMXPY
 * @namespace UUID
 * @description Declare
 */

export type UUIDTimeComponents = {

    readonly low: Uint8Array;
    readonly medium: Uint8Array;
    readonly highAndVersion: Uint8Array;
};

export type UUIDComponentList = [string, string, string, string, string];
