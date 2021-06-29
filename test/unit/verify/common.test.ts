/**
 * @author WMXPY
 * @namespace UUID_Generator
 * @description Common
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { verifyUUID } from "../../../src";

describe('Given [verify-common] Helper Methods', (): void => {

    const chance: Chance.Chance = new Chance('uuid-verify-common');

    it('should be able to verify common uuid', (): void => {

        const id: string = chance.guid();

        const verifyResult: boolean = verifyUUID(id);

        expect(verifyResult).to.be.true;
    });
});
