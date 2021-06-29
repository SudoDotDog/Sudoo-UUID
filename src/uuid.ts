/**
 * @author WMXPY
 * @namespace UUID
 * @description UUID
 */

import { UUIDTimeComponents } from "./declare";
import { createUUIDTimeComponents } from "./time";

export class UUID {

    public generateV1(date: Date = new Date()): string {

        const timeComponents: UUIDTimeComponents = createUUIDTimeComponents(date);

        return "";
    }
}
