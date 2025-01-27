const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  // Constructor
  constructor() {
    this.text = '';
    this.dict1 = [];
    this.dict2 = [];
    
    // American to British
    for (let key in americanOnly) {
      let tmp1 = {};
      tmp1.len = key.length;
      tmp1.key = key;
      tmp1.val = americanOnly[key];
      this.dict1.push(tmp1);
    }
    for (let key in americanToBritishSpelling) {
      let tmp2 = {};
      tmp2.len = key.length;
      tmp2.key = key;
      tmp2.val = americanToBritishSpelling[key];
      this.dict1.push(tmp2);
    }
    // British to American
    for (let key in americanToBritishSpelling) {
      let tmp3 = {};
      tmp3.len = americanToBritishSpelling[key].length;
      tmp3.key = americanToBritishSpelling[key];
      tmp3.val = key;
      this.dict2.push(tmp3);
    }
    for (let key in britishOnly) {
      let tmp4 = {};
      tmp4.len = key.length;
      tmp4.key = key;
      tmp4.val = britishOnly[key];
      this.dict2.push(tmp4);
    }
    // Object arrays sort
    this.dict1.sort((a, b) => b.len - a.len);
    this.dict2.sort((a, b) => b.len - a.len);
  }

  // Main method
  translate(text, locale) {
    this.text = text;
    let reg1 = '';
    let exp1 = '';
    let reg2 = '';
    let exp2 = '';
    let reg3 = '';
    let exp3 = '';
    let flg = false;

    if (text === '') {
      return { error: 'No text to translate' };
    }

    if (locale !== 'american-to-british' && locale !== 'british-to-american') {
      return { error: 'Invalid value for locale field' }
    }
    
    if (locale === 'american-to-british') {
      // Step1
      reg1 = /([0-9]{1,2}):([0-9]{2})/g;
      exp1 = '<span class="highlight">$1.$2</span>';
      if (reg1.test(this.text) === true) {
        flg = true;
        this.text = this.text.replace(reg1, exp1);
      }
      // Step2
      for (let key in americanToBritishTitles) {
        switch (key) {
          case 'mr.':
            reg2 = /(mr)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            break;
          case 'mrs.':
            reg2 = /(mrs)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            break;
          case 'ms.':
            reg2 = /(ms)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            break;
          case 'mx.':
            reg2 = /(mx)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            break;
          case 'dr.':
            reg2 = /(dr)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            break;
          case 'prof.':
            reg2 = /(prof)(\.)/ig;
            exp2 = '<span class="highlight">$1</span>';
            break;
        }
        if (reg2.test(this.text) === true) {
          flg = true;
          this.text = this.text.replace(reg2, exp2);
        }
      }
      // Step3
      for (let i = 0; i < this.dict1.length; i++) {
        reg3 = new RegExp(`(\\s|^)${this.dict1[i].key}([^\\w])`, 'ig');
        exp3 = `$1<span class="highlight">${this.dict1[i].val}</span>$2`;
        if (reg3.test(this.text) === true) {
          flg = true;
          this.text = this.text.replace(reg3, exp3);
        }
      }
      // Step4
      if (flg === false) {
        return {
          text: text,
          translation: 'Everything looks good to me!'
        };
      } else {
        return {
          text: text,
          translation: this.text
        };
      }
    }
    
    if (locale === 'british-to-american') {
      // Step1
      reg1 = /([0-9]{1,2}).([0-9]{2})/g;
      exp1 = '<span class="highlight">$1:$2</span>';
      if (reg1.test(this.text) === true) {
        flg = true;
        this.text = this.text.replace(reg1, exp1);
      }
      // Step2
      for (let key in americanToBritishTitles) {
        switch (americanToBritishTitles[key]) {
          case 'mr':
            reg2 = /(\s|^)(mr)(\s|$|\.)/ig;
            exp2 = '$1<span class="highlight">$2\.</span>$3';
            break;
          case 'mrs':
            reg2 = /(\s|^)(mrs)(\s|$|\.)/ig;
            exp2 = '$1<span class="highlight">$2\.</span>$3';
            break;
          case 'ms':
            reg2 = /(\s|^)(ms)(\s|$|\.)/ig;
            exp2 = '$1<span class="highlight">$2\.</span>$3';
            break;
          case 'mx':
            reg2 = /(\s|^)(mx)(\s|$|\.)/ig;
            exp2 = '$1<span class="highlight">$2\.</span>$3';
            break;
          case 'dr':
            reg2 = /(\s|^)(dr)(\s|$|\.)/ig;
            exp2 = '$1<span class="highlight">$2\.</span>$3';
            break;
          case 'prof':
            reg2 = /(\s|^)(prof)(\s|$|\.)/ig;
            exp2 = '$1<span class="highlight">$2\.</span>$3';
            break;
        }
        if (reg2.test(this.text) === true) {
          flg = true;
          this.text = this.text.replace(reg2, exp2);
        }
      }
      // Step3
      for (let i = 0; i < this.dict2.length; i++) {
        reg3 = new RegExp(`(\\s|^)${this.dict2[i].key}([^\\w])`, 'ig');
        exp3 = `$1<span class="highlight">${this.dict2[i].val}</span>$2`;
        if (reg3.test(this.text) === true) {
          flg = true;
          this.text = this.text.replace(reg3, exp3);
        }
      }
      // Step4
      if (flg === false) {
        return {
          text: text,
          translation: 'Everything looks good to me!'
        };
      } else {
        return {
          text: text,
          translation: this.text
        };
      }
    }
  }

}

module.exports = Translator;