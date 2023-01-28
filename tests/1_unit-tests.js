const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  
  // locale
  const opt1 = 'american-to-british';
  const opt2 = 'british-to-american';
  
  // American to British
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

  // Additional test
  const add01 = 'kilogram and kilometer';
  const add02 = 'From 14:15 to 17:15';
  const res01 = '<span class="highlight">kilogramme</span> and <span class="highlight">kilometre</span>';
  const res02 = 'From <span class="highlight">14.15</span> to <span class="highlight">17.15</span>';
  
  // British to American
  const str11 = 'We watched the footie match for a while.';
  const str12 = 'Paracetamol takes up to an hour to work.';
  const str13 = 'First, caramelise the onions.';
  const str14 = 'I spent the bank holiday at the funfair.';
  const str15 = 'I had a bicky then went to the chippy.';
  const str16 = 'I\'ve just got bits and bobs in my bum bag.';
  const str17 = 'The car boot sale at Boxted Airfield was called off.';
  const str18 = 'Have you met Mrs Kalyani?';
  const str19 = 'Prof Joyner of King\'s College, London.';
  const str20 = 'Tea time is usually around 4 or 4.30.';
  const tran11 = 'We watched the <span class="highlight">soccer</span> match for a while.';
  const tran12 = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
  const tran13 = 'First, <span class="highlight">caramelize</span> the onions.';
  const tran14 = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
  const tran15 = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
  const tran16 = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
  const tran17 = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
  const tran18 = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
  const tran19 = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
  const tran20 = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';

  // American to British Test
  test('Translate to British English - 01', () => {
    assert.equal(translator.translate(str01, opt1), tran01);
  });
  test('Translate to British English - 02', () => {
    assert.equal(translator.translate(str02, opt1), tran02);
  });
  test('Translate to British English - 03', () => {
    assert.equal(translator.translate(str03, opt1), tran03);
  });
  test('Translate to British English - 04', () => {
    assert.equal(translator.translate(str04, opt1), tran04);
  });
  test('Translate to British English - 05', () => {
    assert.equal(translator.translate(str05, opt1), tran05);
  });
  test('Translate to British English - 06', () => {
    assert.equal(translator.translate(str06, opt1), tran06);
  });
  test('Translate to British English - 07', () => {
    assert.equal(translator.translate(str07, opt1), tran07);
  });
  test('Translate to British English - 08', () => {
    assert.equal(translator.translate(str08, opt1), tran08);
  });
  test('Translate to British English - 09', () => {
    assert.equal(translator.translate(str09, opt1), tran09);
  });
  test('Translate to British English - 10', () => {
    assert.equal(translator.translate(str10, opt1), tran10);
  });

  // Additional Test
  test('Additional Test - 01', () => {
    assert.equal(translator.translate(add01, opt1), res01);
  });
  test('Additional Test - 02', () => {
    assert.equal(translator.translate(add02, opt1), res02);
  });

  // British to American Test
  //test('Translate to American English - 01', () => {
  //  assert.equal(translator.translate(str11, opt2), tran11);
  //});
  //test('Translate to American English - 02', () => {
  //  assert.equal(translator.translate(str12, opt2), tran12);
  //});
  //test('Translate to American English - 03', () => {
  //  assert.equal(translator.translate(str13, opt2), tran13);
  //});
  //test('Translate to American English - 04', () => {
  //  assert.equal(translator.translate(str14, opt2), tran14);
  //});
  //test('Translate to American English - 05', () => {
  //  assert.equal(translator.translate(str15, opt2), tran15);
  //});
  //test('Translate to American English - 06', () => {
  //  assert.equal(translator.translate(str16, opt2), tran16);
  //});
  //test('Translate to American English - 07', () => {
  //  assert.equal(translator.translate(str17, opt2), tran17);
  //});
  //test('Translate to American English - 08', () => {
  //  assert.equal(translator.translate(str18, opt2), tran18);
  //});
  //test('Translate to American English - 09', () => {
  //  assert.equal(translator.translate(str19, opt2), tran19);
  //});
  //test('Translate to American English - 10', () => {
  //  assert.equal(translator.translate(str20, opt2), tran20);
  //});
});
