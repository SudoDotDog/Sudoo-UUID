/**
 * @author WMXPY
 * @namespace UUID_Generator
 * @description Version 4
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { UUIDVersion4Generator, verifyUUIDVersion4Regex } from "../../../src";

describe('Given {UUIDVersion4Generator} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('uuid-generator-version-4');

    it('should be able to generate v4 with correct format', (): void => {

        const generator: UUIDVersion4Generator = UUIDVersion4Generator.create();

        const uuid: string = generator.generate().toString();

        expect(uuid).to.be.match(verifyUUIDVersion4Regex);
    });
});
