/**
 * @author WMXPY
 * @namespace UUID_Verify
 * @description Version 1
 */

import { NilUUID } from "../util/nil";

export const verifyUUIDVersion1Regex: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const verifyUUIDVersion1 = (uuid: string): boolean => {

    if (typeof uuid !== 'string') {
        return false;
    }

    if (uuid === NilUUID) {
        return true;
    }

    return verifyUUIDVersion1Regex.test(uuid);
};
