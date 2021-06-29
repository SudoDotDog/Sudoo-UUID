/**
 * @author WMXPY
 * @namespace UUID
 * @description Verify
 */

import { NilUUID } from "./nil";

export const verifyUUIDRegex: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const verifyUUID = (uuid: string): boolean => {

    if (uuid === NilUUID) {
        return true;
    }

    return verifyUUIDRegex.test(uuid);
};
