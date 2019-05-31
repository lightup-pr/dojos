const { expect } = require("chai");
const solution = require("./solution");

describe("func", () => {
  test("should be a function", () => {
    expect(solution).to.be.a("function");
  });
});
