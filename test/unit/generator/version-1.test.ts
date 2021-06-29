/**
 * @author WMXPY
 * @namespace UUID_Generator
 * @description Version 1
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { UUIDVersion1Generator, verifyUUIDVersion1Regex } from "../../../src";

describe('Given {UUIDVersion1Generator} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('uuid-generator-version-1');

    it('should be able to generate v1 with correct format', (): void => {

        const generator: UUIDVersion1Generator = UUIDVersion1Generator.create();

        const uuid: string = generator.generate().toString();

        expect(uuid).to.be.match(verifyUUIDVersion1Regex);
    });
});
