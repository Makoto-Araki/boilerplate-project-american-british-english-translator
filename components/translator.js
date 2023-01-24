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
    let arr = [
      americanOnly,
      americanToBritishSpelling,
      americanToBritishTitles,
      britishOnly ];
    if (locale === 'american-to-british') {
      for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
          let reg = new RegExp(key, 'i');
          if (reg.test(this.text) === true) {
            let str = '<span class="highlight">' + arr[i][key] + '</span>';
            this.text = this.text.replace(reg, str);
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