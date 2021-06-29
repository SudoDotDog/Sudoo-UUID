/**
 * @author WMXPY
 * @namespace UUID_UUID
 * @description Version 1
 */

import { DefaultUUIDVersion1GeneratorOptions, UUIDVersion1Generator, UUIDVersion1GeneratorOptions } from "../generator/version-1";
import { UUID } from "../uuid";
import { verifyUUIDVersion1 } from "../verify/version-1";

export class UUIDVersion1 {

    public static createGenerator(options: UUIDVersion1GeneratorOptions = DefaultUUIDVersion1GeneratorOptions): UUIDVersion1Generator {

        return UUIDVersion1Generator.create(options);
    }

    public static generate(date: Date = new Date(), options: UUIDVersion1GeneratorOptions = DefaultUUIDVersion1GeneratorOptions): UUID {

        return this.createGenerator(options).generate(date);
    }

    public static generateString(date: Date = new Date(), options: UUIDVersion1GeneratorOptions = DefaultUUIDVersion1GeneratorOptions): string {

        return this.createGenerator(options).generateString(date);
    }

    public static verify(uuid: string): boolean {

        return verifyUUIDVersion1(uuid);
    }
}
