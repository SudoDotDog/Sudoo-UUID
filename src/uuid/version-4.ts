/**
 * @author WMXPY
 * @namespace UUID_UUID
 * @description Version 4
 */

import { DefaultUUIDVersion4GeneratorOptions, UUIDVersion4Generator, UUIDVersion4GeneratorOptions } from "../generator/version-4";
import { verifyUUIDVersion4 } from "../verify/version-4";

export class UUIDVersion4 {

    public static createGenerator(options: UUIDVersion4GeneratorOptions = DefaultUUIDVersion4GeneratorOptions): UUIDVersion4Generator {

        return UUIDVersion4Generator.create(options);
    }

    public static verify(uuid: string): boolean {

        return verifyUUIDVersion4(uuid);
    }
}
