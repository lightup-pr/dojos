const { expect } = require("chai");
const jokenpo = require("./jokenpo");

describe("go", () => {
  test("should be a function", () => {
    expect(jokenpo.play).to.be.a("function");
  });

  test("jokenpo.play() should throw TypeError", () => {
    let result = () => jokenpo.play();
    expect(result).to.throw(TypeError, "Invalid arguments");
  });

  test("jokenpo.play('stone', 'paper') should return a string", () => {
    let result = jokenpo.play("stone", "paper");
    expect(result).to.be.a("string");
  });

  //stone
  test("jokenpo.play('stone', 'paper') should return 'Player 2 wins' ", () => {
    let result = jokenpo.play("stone", "paper");
    expect(result).to.equal("Player 2 wins");
  });
  test("jokenpo.play('stone', 'scissors') should return 'Player 1 wins'", () => {
    let result = jokenpo.play("stone", "scissors");
    expect(result).to.equal("Player 1 wins");
  });
  test("jokenpo.play('stone', 'stone') should return 'Player 1 wins'", () => {
    let result = jokenpo.play("stone", "stone");
    expect(result).to.equal("Draw");
  });

  //scissors
  test("jokenpo.play('scissors', 'paper') should return 'Player 1 wins'", () => {
    let result = jokenpo.play("scissors", "paper");
    expect(result).to.equal("Player 1 wins");
  });
  test("jokenpo.play('scissors', 'stone') should return 'Player 2 wins'", () => {
    let result = jokenpo.play("scissors", "stone");
    expect(result).to.equal("Player 2 wins");
  });
  test("jokenpo.play('scissors', 'scissors') should return 'Draw'", () => {
    let result = jokenpo.play("scissors", "scissors");
    expect(result).to.equal("Draw");
  });

  //paper
  test("jokenpo.play('paper', 'paper') should return 'Draw'", () => {
    let result = jokenpo.play("paper", "paper");
    expect(result).to.equal("Draw");
  });
  test("jokenpo.play('paper', 'stone') should return 'Player 1 wins'", () => {
    let result = jokenpo.play("paper", "stone");
    expect(result).to.equal("Player 1 wins");
  });
  test("jokenpo.play('paper', 'scissors') should return 'Player 2 wins'", () => {
    let result = jokenpo.play("paper", "scissors");
    expect(result).to.equal("Player 2 wins");
  });

  //invalid
  test("jokenpo.play('abc', 'scissors') should throw TypeError", () => {
    let result = () => jokenpo.play("abc", "scissors");
    expect(result).to.throw(TypeError, "Invalid option");
  });

  test("jokenpo.play('stone', 'abc') should throw TypeError", () => {
    let result = () => jokenpo.play("stone", "abc");
    expect(result).to.throw(TypeError, "Invalid option");
  });

  test("jokenpo.play('abc', 'abc') should throw TypeError", () => {
    let result = () => jokenpo.play("abc", "abc");
    expect(result).to.throw(TypeError, "Invalid option");
  });

  test("jokenpo.play('abc') should throw TypeError", () => {
    let result = () => jokenpo.play("abc");
    expect(result).to.throw(TypeError, "Invalid arguments");
  });

  test("jokenpo.play([], 'paper') should throw TypeError", () => {
    let result = () => jokenpo.play([], "paper");
    expect(result).to.throw(TypeError, "Invalid option");
  });

  test("jokenpo.play(() => {}, 'stone') should throw TypeError", () => {
    let result = () => jokenpo.play(() => {}, "stone");
    expect(result).to.throw(TypeError, "Invalid option");
  });
});

describe("isValidOption", () => {
  test("should be a function", () => {
    expect(jokenpo.isValidOption).to.be.a("function");
  });

  test("should return a boolean", () => {
    let result = jokenpo.isValidOption("potato");
    expect(result).to.be.a("boolean");
  });

  test("jokenpo.isValidOption() should return false", () => {
    let result = jokenpo.isValidOption();
    expect(result).to.equal(false);
  });

  test("jokenpo.isValidOption('potato') should return false", () => {
    let result = jokenpo.isValidOption("potato");
    expect(result).to.equal(false);
  });

  test("jokenpo.isValidOption('paper') should return true", () => {
    let result = jokenpo.isValidOption("paper");
    expect(result).to.equal(true);
  });

  test("jokenpo.isValidOption(1) should return false", () => {
    let result = jokenpo.isValidOption(1);
    expect(result).to.equal(false);
  });

  test("jokenpo.isValidOption(true) should return false", () => {
    let result = jokenpo.isValidOption(true);
    expect(result).to.equal(false);
  });

  test("jokenpo.isValidOption([]) should return false", () => {
    let result = jokenpo.isValidOption([]);
    expect(result).to.equal(false);
  });

  test("jokenpo.isValidOption({}) should return false", () => {
    let result = jokenpo.isValidOption({});
    expect(result).to.equal(false);
  });
});

describe("winner", () => {
  test("should be a function", () => {
    expect(jokenpo.winner).to.be.a("function");
  });

  test("winner(1) should return 'Player 1 wins'", () => {
    let result = jokenpo.winner(1);
    expect(result).to.equal("Player 1 wins");
  });

  test("winner(2) should return 'Player 2 wins'", () => {
    let result = jokenpo.winner(2);
    expect(result).to.equal("Player 2 wins");
  });

  test("winner('João') should throw a TypeError", () => {
    let result = () => jokenpo.winner("João");
    expect(result).to.throw(TypeError, "Invalid arguments");
  });

  test("winner() should throw a TypeError", () => {
    let result = () => jokenpo.winner();
    expect(result).to.throw(TypeError, "Invalid arguments");
  });

  test("winner([]) should throw a TypeError", () => {
    let result = () => jokenpo.winner([]);
    expect(result).to.throw(TypeError, "Invalid arguments");
  });
});
