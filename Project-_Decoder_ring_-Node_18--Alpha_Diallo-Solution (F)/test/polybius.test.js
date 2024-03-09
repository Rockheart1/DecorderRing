const { expect } = require("chai");
const { polybius } = require("../src/polybius"); // Make sure the path matches where your function is located

describe("#polybius()", function() {
  // Encoding Tests
  it("should encode a message by translating each letter to number pairs", function() {
    const input = "hello world";
    const expected = "3251131343 2543241341";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });

  it("should translate both 'i' and 'j' to 42", function() {
  const input = "ijijijij";
  const actual = polybius(input);
  console.log(actual); // Temporarily added to debug the output
  const expected = "4242424242424242";
  expect(actual).to.equal(expected);
});

  // Decoding Tests
  it("should decode a message by translating each pair of numbers into a letter", function() {
    const input = "3251131343 2543241341";
    const expected = "hello world";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });

  it("should handle 'i' and 'j' during decoding, showing both possibilities", function() {
    const input = "42424242";
    const expected = "i/ji/ji/ji/ji/ji/ji/ji/j";
    const actual = polybius(input, false);
    expect(actual).to.include("i/j");
  });

  it("should leave spaces as is during decoding", function() {
    const input = "3251131343 2543241341";
    const expected = "hello world";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });

  it("should return false for decoding if the length of the input string excluding spaces is odd", function() {
    const input = "44324233521254134";
    const actual = polybius(input, false);
    expect(actual).to.be.false;
  });
});

