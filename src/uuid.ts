/**
 * @author WMXPY
 * @namespace UUID
 * @description UUID
 */

import { NilUUID } from "./util/nil";
import { UUIDVersion1 } from "./uuid/version-1";
import { UUIDVersion4 } from "./uuid/version-4";
import { verifyUUIDCommon } from "./verify/common";

export class UUID {

    public static get version1(): typeof UUIDVersion1 {

        return UUIDVersion1;
    }

    public static get version4(): typeof UUIDVersion4 {

        return UUIDVersion4;
    }

    public static getNil(): string {

        return NilUUID;
    }

    public static verify(uuid: string): boolean {

        return verifyUUIDCommon(uuid);
    }
}
