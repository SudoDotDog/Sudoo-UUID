/**
 * @author WMXPY
 * @namespace UUID
 * @description UUID
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { UUID, UUIDVersion1Generator, UUIDVersion4Generator } from "../../src";

describe('Given {UUID} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('uuid-uuid');

    it('should be able to generate', (): void => {

        const generator: UUIDVersion1Generator = UUIDVersion1Generator.create();

        const uuid: UUID = generator.generate();

        expect(uuid).to.be.instanceOf(UUID);
    });

    it('should be able to get uuid variant number', (): void => {

        const generator: UUIDVersion1Generator = UUIDVersion1Generator.create();

        const uuid: UUID = generator.generate();

        expect(uuid.getVariant()).to.be.equal(1);
    });

    it('should be able to get uuid version number - v1', (): void => {

        const generator: UUIDVersion1Generator = UUIDVersion1Generator.create();

        const uuid: UUID = generator.generate();

        expect(uuid.getVersion()).to.be.equal(1);
    });

    it('should be able to get uuid version number - v4', (): void => {

        const generator: UUIDVersion4Generator = UUIDVersion4Generator.create();

        const uuid: UUID = generator.generate();

        expect(uuid.getVersion()).to.be.equal(4);
    });
});
