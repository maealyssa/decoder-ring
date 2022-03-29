// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (typeof input !== "string" || input.length === 0) {
      console.log("Please input a string");
    }
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = input.toLowerCase().split("");
    // DECODING BEHAVIOR:
    if (!encode) {
      shift *= -1;
    }
    const newArray = [];
    for (let character of inputArray) {
      if (alphabetArray.includes(character)) {
        const characterIndex = alphabetArray.indexOf(character);
        let newIndex = characterIndex + shift;
        if (newIndex >= 0) {
          newIndex = newIndex % 26;
        } else newIndex = newIndex + 26;
        const shiftedCharacter = alphabetArray[newIndex];
        newArray.push(shiftedCharacter);
      } else {
        newArray.push(character);
      }
    }
    return newArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
