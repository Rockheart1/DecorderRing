const { expect } = require('chai');
const { caesar } = require('../src/caesar');

describe('caesar', () => {
  it('should return a false if the shift value is invalid', () => {
    const input = 'thinkful';
    const invalidShifts = [0, -26, 26];

    invalidShifts.forEach((shift) => {
      const result = caesar(input, shift);
      expect(result).to.be.false;
    });
  });

  it('should encode a message by shifting characters', () => {
    const input = 'thinkful';
    const shift = 3;
    const expected = 'wklqnixo';

    const result = caesar(input, shift);
    expect(result).to.equal(expected);
  });

  it('should decode a message by shifting characters', () => {
    const input = 'wklqnixo';
    const shift = 3;
    const expected = 'thinkful';

    const result = caesar(input, shift, false);
    expect(result).to.equal(expected);
  });

  it('should maintain spaces and other non-alphabetic symbols', () => {
    const input = 'a message!';
    const shift = 3;
    const expected = 'd phvvdjh!';

    const result = caesar(input, shift);
    expect(result).to.equal(expected);
  });

  it('should ignore capital letters', () => {
    const input = 'A Message';
    const shift = 3;
    const expected = 'd phvvdjh';

    const result = caesar(input, shift);
    expect(result).to.equal(expected);
  });

  it('should wrap around the alphabet', () => {
    const input = 'xyz';
    const shift = 3;
    const expected = 'abc';

    const result = caesar(input, shift);
    expect(result).to.equal(expected);
  });
  
  it('should allow for a negative shift that will shift to the left', () => {
  const input = 'wbyox jxdxwfkb';
  const shift = -3;
  const expected = 'zebra magazine';

  const result = caesar(input, shift, false);
  expect(result).to.equal(expected);
  });
});
