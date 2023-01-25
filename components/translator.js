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
      console.log(`AAA`);
      let tmp1 = [];
      let tmp2 = [];
      let tmp3 = [];
      let reg1 = '';
      let reg2 = '';
      for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
          reg1 = new RegExp(key, 'i');
          reg2 = /[0-9]{2}:[0-9]{2}/;
          if (reg1.test(this.text) === true) {
            tmp1.push(key.length);
            tmp2.push(key);
            tmp3.push(arr[i][key]);
          }
        }
      }
      console.log(`BBB`);
      console.log(`B01 : ${tmp1.length}`);
      console.log(`B02 : ${tmp2.length}`);
      console.log(`B03 : ${tmp3.length}`);
      let wrk1 = 0;
      let wrk2 = tmp1[wrk1];
      let reg3 = '';
      let strs = '';
      for (let i = 1; i < tmp1.length; i++) {
        if (wrk2 <= tmp1[i]) {
          wrk1 = i;
          wrk2 = tmp1[wrk1];
        }
      }
      console.log(`CCC`);
      console.log(`C01 : ${wrk1}`);
      console.log(`C02 : ${tmp2[wrk1]}`);
      console.log(`C03 : ${tmp3[wrk1]}`);
      switch(tmp2[wrk1]) {
        case 'mr.':
          reg3 = /(mr)(.)/i;
          strs = '<span class="highlight">$1</span>';
          break;
        case 'mrs.':
          reg3 = /(mrs)(.)/i;
          strs = '<span class="highlight">$1</span>';
          break;
        case 'ms.':
          reg3 = /(ms)(.)/i;
          strs = '<span class="highlight">$1</span>';
          break;
        case 'mx.':
          reg3 = /(mx)(.)/i;
          strs = '<span class="highlight">$1</span>';
          break;
        case 'dr.':
          reg3 = /(dr)(.)/i;
          strs = '<span class="highlight">$1</span>';
          break;
        case 'prof.':
          reg3 = /(prof)(.)/i;
          strs = '<span class="highlight">$1</span>';
          break;
        default:
          reg3 = new RegExp(tmp2[wrk1], 'i');
          strs = '<span class="highlight">' + tmp3[wrk1] + '</span>';
          break;
      }
      console.log(`DDD`);
      console.log(`BEF : ${this.text}`);
      this.text = this.text.replace(reg3, strs);
      console.log(`AFT : ${this.text}`);
    } else {
      //
    }
    return this.text;
  }
  
}

module.exports = Translator;