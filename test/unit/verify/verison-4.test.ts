/**
 * @author WMXPY
 * @namespace UUID_Generator
 * @description Common
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { verifyUUIDVersion4 } from "../../../src";

describe('Given [verify-version-4] Helper Methods', (): void => {

    const chance: Chance.Chance = new Chance('uuid-verify-version-4');

    it('should be able to verify version 4 uuid', (): void => {

        const id: string = chance.guid({
            version: 4,
        });

        const verifyResult: boolean = verifyUUIDVersion4(id);

        expect(verifyResult).to.be.true;
    });
});
