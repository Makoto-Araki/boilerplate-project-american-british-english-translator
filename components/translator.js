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
    console.log(`A01`);
    this.text = text;
    console.log(`A02`);
    //if (localte === 'american-to-british') {
      //for (key in americanOnly) {
        console.log(americanOnly.bangs);
      //}
    console.log(`A03`);
    //} else {
      //
    //}
  }
  
}

module.exports = Translator;