function polybius(input, encode = true) {
  const square = {
    'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51',
    'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52',
    'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53',
    'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54',
    'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55',
  };

  if (encode) {
    return input.toLowerCase().split("").map(char => {
      if (char === " ") return " "; // Keep spaces unchanged
      return square[char]; // Replace letter with numbers
    }).join("");
  } else {
    // Decoding logic remains unchanged as the issue seems to be with encoding interpretation
    if ((input.replace(/\s/g, "").length % 2) !== 0) return false;

    return input.split(" ").map(word => {
      let decoded = "";
      for (let i = 0; i < word.length; i += 2) {
        let numPair = word.substring(i, i+2);
        let letter = Object.keys(square).find(key => square[key] === numPair);
        if (numPair === "42") decoded += "(i/j)";
        else decoded += letter;
      }
      return decoded;
    }).join(" ");
  }
}

module.exports = { polybius };
