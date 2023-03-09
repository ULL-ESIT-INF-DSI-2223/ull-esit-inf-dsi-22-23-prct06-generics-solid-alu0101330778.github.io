"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importar librerias y funciones
require("mocha");
const chai_1 = require("chai");
const index_1 = require("../src/index");
//Testeo
describe("hammingdist function test", () => {
    it("hammingdist(\"CACCTACTAACAGGGAT\",\"CATCGTAATGACGGCCT\") returns 12", () => {
        (0, chai_1.expect)((0, index_1.hammingdist)("CACCTACTAACAGGGAT", "CATCGTAATGACGGCCT")).to.be.equal(12);
    });
    it("hammingdist(\"CACCTACTAACAGGGAT\",\"CATCGTAATGACGGCCT\") returns 12", () => {
        (0, chai_1.expect)((0, index_1.hammingdist)("CACCTACTAACAGGGAT", "CATCGTAATGACGGCCT")).to.be.equal(12);
    });
});
