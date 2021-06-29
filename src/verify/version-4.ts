/**
 * @author WMXPY
 * @namespace UUID_Verify
 * @description Version 4
 */

import { NilUUID } from "../util/nil";

export const verifyUUIDVersion4Regex: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const verifyUUIDVersion4 = (uuid: string): boolean => {

    if (uuid === NilUUID) {
        return true;
    }

    return verifyUUIDVersion4Regex.test(uuid);
};
