/**
 * @author WMXPY
 * @namespace UUID_UUID
 * @description Version 1
 */

import { DefaultUUIDVersion1GeneratorOptions, UUIDVersion1Generator, UUIDVersion1GeneratorOptions } from "../generator/version-1";
import { verifyUUIDVersion1 } from "../verify/version-1";

export class UUIDVersion1 {

    public static createGenerator(options: UUIDVersion1GeneratorOptions = DefaultUUIDVersion1GeneratorOptions): UUIDVersion1Generator {

        return UUIDVersion1Generator.create(options);
    }

    public static verify(uuid: string): boolean {

        return verifyUUIDVersion1(uuid);
    }
}
