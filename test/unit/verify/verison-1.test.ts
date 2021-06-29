/**
 * @author WMXPY
 * @namespace UUID_Generator
 * @description Common
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { verifyUUIDVersion1 } from "../../../src";

describe('Given [verify-version-1] Helper Methods', (): void => {

    const chance: Chance.Chance = new Chance('uuid-verify-version-1');

    it('should be able to verify version 4 uuid', (): void => {

        const id: string = chance.guid({
            version: 1 as any,
        });

        const verifyResult: boolean = verifyUUIDVersion1(id);

        expect(verifyResult).to.be.true;
    });
});
