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
      let tmp1 = [];
      let tmp2 = [];
      let tmp3 = [];
      for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
          let reg1 = new RegExp(key, 'i');
          if (reg1.test(this.text) === true) {
            tmp1.push(key.length);
            tmp2.push(key);
            tmp3.push(arr[i][key]);
          }
        }
      }
      let wrk1 = 0;
      let wrk2 = tmp1[wrk1];
      for (let i = 1; i < tmp1.length; i++) {
        if (wrk2 <= tmp1[i]) {
          wrk1 = i;
          wrk2 = tmp1[wrk1];
        }
      }
      let reg2 = new RegExp(tmp2[wrk1], 'i');
      let str1 = '<span class="highlight">' + tmp3[wrk1] + '</span>';
      this.text = this.text.replace(reg2, str1);
    } else {
      //
    }
    return this.text;
  }
  
}

module.exports = Translator;