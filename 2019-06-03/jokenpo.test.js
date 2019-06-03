const { expect } = require("chai");
const jokenpo = require("./jokenpo");

describe("func", () => {
  test("should be a function", () => {
    expect(jokenpo.go).to.be.a("function");
  });
});
