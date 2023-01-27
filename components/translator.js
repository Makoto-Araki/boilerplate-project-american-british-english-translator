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
    let database = [ americanOnly, americanToBritishSpelling, britishOnly ];
    let candidateList = {};
    let reg1 = '';
    let exp1 = '';
    let tmp1 = [];
    let tmp2 = [];
    let tmp3 = [];
    let reg2 = '';
    let exp2 = '';
    let reg3 = '';
    let exp3 = '';
    let maxIdx = 0;
    let idxLen = 0;
    
    if (locale === 'american-to-british') {
      // Step1
      console.log(`Step1`);
      reg1 = /([0-9]{1,2}):([0-9]{2})/;
      exp1 = '<span class="highlight">$1.$2</span>';
      while (reg1.test(this.text) === true) {
        this.text = this.text.replace(reg1, exp1);
      }
      // Step2
      console.log(`Step2`);
      for (let key in americanToBritishTitles) {
        switch (key) {
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
        }
        while (reg2.test(this.text) === true) {
          this.text = this.text.replace(reg2, exp2);
        }
      }
      // Step3
      console.log(`Step3`);
      //let candidateList = {};
      for (let i = 0; i < database.length; i++) {
        if (database[i] !== britishOnly) {
          for (key in database[i]) {
            candidateList[key] = database[i][key];
          }
        } else {
          for (key in database[i]) {
            candidateList[database[i][key]] = key;
          }
        }
      }
      // Step4
      console.log(`Step4`);
      for (let key in candidateList) {
        reg3 = new RegExp(key, 'i');
        if (reg3.test(this.text) === true) {
          tmp1.push(key.length);
          tmp2.push(key);
          tmp3.push(candidateList[key]);
        }
      }
      // Step5
      console.log(`Step5`);
      maxIdx = 0;
      idxLen = tmp1[maxIdx];
      for (let i = 0; i < tmp1.length; i++) {
        if (idxLen <= tmp1[i]) {
          maxIdx = i;
          idxLen = tmp1[maxIdx];
        }
      }
      // Step6
      console.log(`Step6`);
      reg3 = new RegExp(tmp2[maxIdx], 'i');
      exp3 = '<span class="highlight">' + tmp3[maxIdx] + '</span>';
      //while (reg3.test(this.text) === true) {
        this.text = this.text.replace(reg3, exp3);
      //}

      /*
        // Step2
        for (let j = 0; j < arr.length; j++) {
          for (let key in arr[j]) {
            reg2 = new RegExp(key, 'i');
            if (reg2.test(this.text) === true) {
              tmp1.push(key.length);
              tmp2.push(key);
              tmp3.push(arr[j][key]);
            }
          }
        }
        wrk1 = 0;
        wrk2 = tmp1[wrk1];
        for (let j = 1; j < tmp1.length; j++) {
          if (wrk2 <= tmp1[j]) {
            wrk1 = j;
            wrk2 = tmp1[wrk1];
          }
        }
        if (tmp2[wrk1] !== undefined) {
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
          while (reg2.test(this.text) === true) {
            this.text = this.text.replace(reg2, exp2);
          }
        }
      //}
      */
    } else {
      /*
        // Step1
        reg1 = /([0-9]{1,2}).([0-9]{2})/;
        exp1 = '<span class="highlight">$1:$2</span>';
        if (reg1.test(this.text) === true) {
          this.text = this.text.replace(reg1, exp1);
        }
        // Step2
        for (let j = 0; j < arr.length; j++) {
          for (let key in arr[j]) {
            if (arr[j] !== britishOnly) {
              reg2 = new RegExp(arr[j][key], 'i');
              if (reg2.test(this.text) === true) {
                tmp1.push(arr[j][key].length);
                tmp2.push(arr[j][key]);
                tmp3.push(key);
              }
            } else {
              reg2 = new RegExp(key, 'i');
              if (reg2.test(this.text) === true) {
                tmp1.push(key.length);
                tmp2.push(key);
                tmp3.push(arr[j][key]);
              }
            }
          }
        }
        wrk1 = 0;
        wrk2 = tmp1[wrk1];
        for (let j = 1; j < tmp1.length; j++) {
          if (wrk2 <= tmp1[j]) {
            wrk1 = j;
            wrk2 = tmp1[wrk1];
          }
        }
        if (tmp2[wrk1] !== undefined) {
          switch(tmp2[wrk1]) {
            case 'mr':
              reg2 = /(mr)/i;
              exp2 = '<span class="highlight">$1.</span>';
              break;
            case 'mrs':
              reg2 = /(mrs)/i;
              exp2 = '<span class="highlight">$1.</span>';
              break;
            case 'ms':
              reg2 = /(ms)/i;
              exp2 = '<span class="highlight">$1.</span>';
              break;
            case 'mx':
              reg2 = /(mx)/i;
              exp2 = '<span class="highlight">$1.</span>';
              break;
            case 'dr':
              reg2 = /(dr)/i;
              exp2 = '<span class="highlight">$1.</span>';
              break;
            case 'prof':
              reg2 = /(prof)/i;
              exp2 = '<span class="highlight">$1.</span>';
              break;
            default:
              reg2 = new RegExp(tmp2[wrk1], 'i');
              exp2 = '<span class="highlight">' + tmp3[wrk1] + '</span>';
              break;
          }
          this.text = this.text.replace(reg2, exp2);
        }
      //}
      */
    }
    return this.text;
  }
  
}

module.exports = Translator;