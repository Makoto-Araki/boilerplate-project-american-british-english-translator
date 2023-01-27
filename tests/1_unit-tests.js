const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  //*
  // locale
  const option1 = 'american-to-british';
  const option2 = 'british-to-american';

  // American => British
  const str01 = 'Mangoes are my favorite fruit.';
  const str02 = 'I ate yogurt for breakfast.';
  const str03 = "We had a party at my friend\'s condo.";
  const str04 = 'Can you toss this in the trashcan for me?';
  const str05 = 'The parking lot was full.';
  const str06 = 'Like a high tech Rube Goldberg machine.';
  const str07 = 'To play hooky means to skip class or work.';
  const str08 = 'No Mr. Bond, I expect you to die.';
  const str09 = 'Dr. Grosh will see you now.';
  const str10 = 'Lunch is at 12:15 today.';
  //const str99 = 'From 14:15 to 19:15';
  const tran01 = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
  const tran02 = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
  const tran03 = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
  const tran04 = 'Can you toss this in the <span class="highlight">bin</span> for me?';
  const tran05 = 'The <span class="highlight">car park</span> was full.';
  const tran06 = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
  const tran07 = 'To <span class="highlight">bunk off</span> means to skip class or work.';
  const tran08 = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
  const tran09 = '<span class="highlight">Dr</span> Grosh will see you now.';
  const tran10 = 'Lunch is at <span class="highlight">12.15</span> today.';
  //const tran99 = 'From <span class="highlight">14.15</span> to <span class="highlight">19.15</span>';

  // British => American
  const str11 = 'We watched the footie match for a while.';
  const str12 = 'Paracetamol takes up to an hour to work.';
  const str13 = '';
  const str14 = '';
  const str15 = '';
  const str16 = '';
  const str17 = '';
  const str18 = '';
  const str19 = '';
  const str20 = '';
  const tran11 = 'We watched the <span class="highlight">soccer</span> match for a while.';
  const tran12 = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
  const tran13 = '';
  const tran14 = '';
  const tran15 = '';
  const tran16 = '';
  const tran17 = '';
  const tran18 = '';
  const tran19 = '';
  const tran20 = '';

  // American => British Test
  test('Translate to British English - 01', () => {
    assert.equal(translator.translate(str01, option1), tran01);
  });
  test('Translate to British English - 02', () => {
    assert.equal(translator.translate(str02, option1), tran02);
  });
  test('Translate to British English - 03', () => {
    assert.equal(translator.translate(str03, option1), tran03);
  });
  test('Translate to British English - 04', () => {
    assert.equal(translator.translate(str04, option1), tran04);
  });
  test('Translate to British English - 05', () => {
    assert.equal(translator.translate(str05, option1), tran05);
  });
  test('Translate to British English - 06', () => {
    assert.equal(translator.translate(str06, option1), tran06);
  });
  test('Translate to British English - 07', () => {
    assert.equal(translator.translate(str07, option1), tran07);
  });
  test('Translate to British English - 08', () => {
    assert.equal(translator.translate(str08, option1), tran08);
  });
  test('Translate to British English - 09', () => {
    assert.equal(translator.translate(str09, option1), tran09);
  });
  test('Translate to British English - 10', () => {
    assert.equal(translator.translate(str10, option1), tran10);
  });
  /*
  test('Translate to British English - 99', () => {
    assert.equal(translator.translate(str99, option1), tran99);
  });
  */

  // British => American Test
  /*
  test('Translate to American English - 01', () => {
    assert.equal(translator.translate(str11, option2), tran11);
  });
  test('Translate to American English - 02', () => {
    assert.equal(translator.translate(str12, option2), tran12);
  });
  */
});
