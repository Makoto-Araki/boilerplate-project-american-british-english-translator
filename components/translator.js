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
      // Step1
      let reg1 = /([0-9]{2}):([0-9]{2})/;
      let exp1 = '<span class="highlight">$1.$2</span>';
      if (reg1.test(this.text) === true) {
        this.text = this.text.replace(reg1, exp1);
      }
      // Step2
      let tmp1 = [];
      let tmp2 = [];
      let tmp3 = [];
      let reg2 = '';
      let exp2 = '';
      for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
          reg2 = new RegExp(key, 'i');
          if (reg2.test(this.text) === true) {
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
      switch(tmp2[wrk1]) {
        case 'mr.':
          reg2 = /(mr)(.)/i;
          exp2 = '<span class="highlight">$1</span>';
          break;
        case 'mrs.':
          reg2 = /(mrs)(.)/i;
          exp2 = '<span class="highlight">$1</span>';
          break;
        case 'ms.':
          reg2 = /(ms)(.)/i;
          exp2 = '<span class="highlight">$1</span>';
          break;
        case 'mx.':
          reg2 = /(mx)(.)/i;
          exp2 = '<span class="highlight">$1</span>';
          break;
        case 'dr.':
          reg2 = /(dr)(.)/i;
          exp2 = '<span class="highlight">$1</span>';
          break;
        case 'prof.':
          reg2 = /(prof)(.)/i;
          exp2 = '<span class="highlight">$1</span>';
          break;
        default:
          reg2 = new RegExp(tmp2[wrk1], 'i');
          exp2 = '<span class="highlight">' + tmp3[wrk1] + '</span>';
          break;
      }
      this.text = this.text.replace(reg2, exp2);
    } else {
      //
    }
    return this.text;
  }
  
}

module.exports = Translator;