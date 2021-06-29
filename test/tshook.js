/**
 * @author WMXPY
 * @namespace Mocha
 * @description Index
 */

const ts_node = require("ts-node");
const path = require("path");

ts_node.register({
    project: path.join(__dirname, 'tsconfig.test.json')
});
