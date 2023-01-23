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
          let reg = new RegExp(key, 'i');
          if (reg.test(this.text) === true) {
            console.log(`BEF : ${this.text}`);
            this.text = this.text.replace(reg, arr1[i][key]);
            console.log(`AFT : ${this.text}`);
          }
        }
      }
    } else {
      //
    }
    return this.text;
  }
  
}

module.exports = Translator;