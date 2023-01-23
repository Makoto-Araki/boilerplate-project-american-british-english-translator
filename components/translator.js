const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  
  // Constructor
  constructor() {
    this.text = '';
  }

  // Main method
  translate(text, locale) {
    this.text = text;
    let arr1 = [
      americanOnly,
      americanToBritishSpelling,
      americanToBritishTitles,
      britishOnly ];
    if (locale === 'american-to-british') {
      for (let i = 0; i < arr1.length; i++) {
        for (let key in arr1[i]) {
          //console.log(`${key} : ${americanOnly[key]}`);
        }
      }
    } else {
      //
    }
  }
  
}

module.exports = Translator;