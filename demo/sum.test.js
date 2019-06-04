const { expect } = require("chai");
const sum = require("./sum");

describe("sum", () => {
  test("should be a function", () => {
    expect(sum).to.be.a("function");
  });

  test("should return a number", () => {
    let result = sum();
    expect(result).to.be.a("number");
  });

  test("sum(1, 2) should return 3", () => {
    let result = sum(1, 2);
    expect(result).to.equal(3);
  });

  test("sum(3, 5) should return 8", () => {
    let result = sum(3, 5);
    expect(result).to.equal(8);
  });
});
