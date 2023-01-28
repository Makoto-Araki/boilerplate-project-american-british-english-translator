const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  // Constructor
  constructor() {
    // Property
    this.text = '';
    this.dict1 = {};
    this.dict2 = {};
    // American to British
    for (let key in americanOnly) {
      this.dict1[key] = americanOnly[key];
    }
    for (let key in americanToBritishSpelling) {
      this.dict1[key] = americanToBritishSpelling[key];
    }
    // British to American
    for (let key in americanToBritishSpelling) {
      this.dict2[americanToBritishSpelling[key]] = key;
    }
    for (let key in britishOnly) {
      this.dict2[key] = britishOnly[key];
    }
  }

  // Main method
  translate(text, locale) {
    this.text = text;
    let tmp1 = [];
    let tmp2 = [];
    let tmp3 = [];
    let reg1 = '';
    let exp1 = '';
    let reg2 = '';
    let exp2 = '';
    let reg3 = '';
    let exp3 = '';
    let hits = 0;

    if (locale === 'american-to-british') {
      // Step1
      reg1 = /([0-9]{1,2}):([0-9]{2})/g;
      exp1 = '<span class="highlight">$1.$2</span>';
      this.text = this.text.replace(reg1, exp1);
      // Step2
      for (let key in americanToBritishTitles) {
        switch (key) {
          case 'mr.':
            reg2 = /(mr)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            this.text = this.text.replace(reg2, exp2);
            break;
          case 'mrs.':
            reg2 = /(mrs)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            this.text = this.text.replace(reg2, exp2);
            break;
          case 'ms.':
            reg2 = /(ms)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            this.text = this.text.replace(reg2, exp2);
            break;
          case 'mx.':
            reg2 = /(mx)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            this.text = this.text.replace(reg2, exp2);
            break;
          case 'dr.':
            reg2 = /(dr)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            this.text = this.text.replace(reg2, exp2);
            break;
          case 'prof.':
            reg2 = /(prof)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            this.text = this.text.replace(reg2, exp2);
            break;
        }
      }
      // Step3
      for (let key in this.dict1) {
        reg3 = new RegExp('((\\s|\^))' + key + '((\\s|\.|\$))', 'ig');
        if (reg3.test(this.text) === true) hits++;
        exp3 = '$1<span class="highlight">' + this.dict1[key] + '</span>$3';
        this.text = this.text.replace(reg3, exp3);
      //  reg3 = new RegExp(key, 'i');
      //  if (reg3.test(this.text) === true) {
      //    tmp1.push(key.length);
      //    tmp2.push(key);
      //    tmp3.push(this.dict1[key]);
      //  }
      }
      // Step4
      //console.log(`STEP4`);
      //console.log(`TEXT : ${this.text}`);
      //let wrk1 = 0;
      //let wrk2 = tmp1[wrk1];
      //for (let i = 0; i < tmp1.length; i++) {
      //  if (wrk2 <= tmp1[i]) {
      //    wrk1 = i;
      //    wrk2 = tmp1[wrk1];
      //  }
      //}
      // Step5
      //console.log(`STEP5`);
      //console.log(`TEXT : ${this.text}`);
      //if (tmp2[wrk1] !== undefined) {
      //  reg3 = new RegExp(tmp2[wrk1], 'ig');
      //  exp3 = '<span class="highlight">' + tmp3[wrk1] + '</span>';
      //  this.text = this.text.replace(reg3, exp3);
      //}
      // Step6
      //console.log(`Step6`);
      //console.log(`TEXT : ${this.text}`);
    } else {
      //
    }
    return this.text;
  }

}

module.exports = Translator;