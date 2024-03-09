const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("#substitution()", () => {
  it("should encode a message", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "jrufscpw";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });

  it("should decode a message", () => {
    const input = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "thinkful";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and ignore capital letters", () => {
    const input = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });

  it("should return false if the alphabet is not provided or invalid", () => {
    const input = "thinkful";
    expect(substitution(input)).to.be.false;
    expect(substitution(input, "short")).to.be.false;
    expect(substitution(input, "abcabcabcabcabcabcabcabcyz")).to.be.false;
    expect(substitution(input, "abaaaab")).to.be.false;
  });
});