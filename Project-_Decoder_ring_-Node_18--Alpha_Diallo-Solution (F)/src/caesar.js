const caesarModule = (function () {
  const shiftChar = (char, shift, encode) => {
    if (/[a-z]/.test(char)) {
      let charCode = char.charCodeAt(0);

      // Adjust the shift direction based on encoding or decoding
      let adjustedShift = encode ? shift : -shift;

      // Ensure the adjusted shift is positive
      adjustedShift = (adjustedShift % 26 + 26) % 26;

      charCode = ((charCode - 97 + adjustedShift) % 26) + 97;

      return String.fromCharCode(charCode);
    }

    return char;
  };

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    let inputArray = input.toLowerCase().split('');

    let result = inputArray.map((char) => shiftChar(char, shift, encode));

    return result.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

module.exports = { caesar: caesarModule.caesar };
