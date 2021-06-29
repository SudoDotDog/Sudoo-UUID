/**
 * @author WMXPY
 * @namespace UUID_Verify
 * @description Common
 */

import { NilUUID } from "../util/nil";

export const verifyUUIDCommonRegex: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const verifyUUID = (uuid: string): boolean => {

    if (typeof uuid !== 'string') {
        return false;
    }

    if (uuid === NilUUID) {
        return true;
    }

    return verifyUUIDCommonRegex.test(uuid);
};
