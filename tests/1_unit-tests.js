const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  
  // locale
  const option1 = 'american-to-british';
  const option2 = 'british-to-american';
  
  // American to British
  const string01 = 'Mangoes are my favorite fruit.';
  const string02 = 'I ate yogurt for breakfast.';
  const string03 = "We had a party at my friend\'s condo.";
  const string04 = 'Can you toss this in the trashcan for me?';
  const string05 = 'The parking lot was full.';
  const string06 = 'Like a high tech Rube Goldberg machine.';
  const string07 = 'To play hooky means to skip class or work.';
  const string08 = 'No Mr. Bond, I expect you to die.';
  const string09 = 'Dr. Grosh will see you now.';
  const string10 = 'Lunch is at 12:15 today.';
  const translate01 = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
  const translate02 = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
  const translate03 = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
  const translate04 = 'Can you toss this in the <span class="highlight">bin</span> for me?';
  const translate05 = 'The <span class="highlight">car park</span> was full.';
  const translate06 = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
  const translate07 = 'To <span class="highlight">bunk off</span> means to skip class or work.';
  const translate08 = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
  const translate09 = '<span class="highlight">Dr</span> Grosh will see you now.';
  const translate10 = 'Lunch is at <span class="highlight">12.15</span> today.';
  
  // British to American
  const string11 = 'We watched the footie match for a while.';
  const string12 = 'Paracetamol takes up to an hour to work.';
  const string13 = 'First, caramelise the onions.';
  const string14 = 'I spent the bank holiday at the funfair.';
  const string15 = 'I had a bicky then went to the chippy.';
  const string16 = 'I\'ve just got bits and bobs in my bum bag.';
  const string17 = 'The car boot sale at Boxted Airfield was called off.';
  const string18 = 'Have you met Mrs Kalyani?';
  const string19 = 'Prof Joyner of King\'s College, London.';
  const string20 = 'Tea time is usually around 4 or 4.30.';
  const translate11 = 'We watched the <span class="highlight">soccer</span> match for a while.';
  const translate12 = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
  const translate13 = 'First, <span class="highlight">caramelize</span> the onions.';
  const translate14 = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
  const translate15 = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
  const translate16 = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
  const translate17 = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
  const translate18 = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
  const translate19 = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
  const translate20 = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';

  // American to British Test
  test('Translate to British English - 01', () => {
    assert.equal(translator.translate(string01, option1), translate01);
  });
  test('Translate to British English - 02', () => {
    assert.equal(translator.translate(string02, option1), translate02);
  });
  test('Translate to British English - 03', () => {
    assert.equal(translator.translate(string03, option1), translate03);
  });
  test('Translate to British English - 04', () => {
    assert.equal(translator.translate(string04, option1), translate04);
  });
  test('Translate to British English - 05', () => {
    assert.equal(translator.translate(string05, option1), translate05);
  });
  test('Translate to British English - 06', () => {
    assert.equal(translator.translate(string06, option1), translate06);
  });
  test('Translate to British English - 07', () => {
    assert.equal(translator.translate(string07, option1), translate07);
  });
  test('Translate to British English - 08', () => {
    assert.equal(translator.translate(string08, option1), translate08);
  });
  test('Translate to British English - 09', () => {
    assert.equal(translator.translate(string09, option1), translate09);
  });
  test('Translate to British English - 10', () => {
    assert.equal(translator.translate(string10, option1), translate10);
  });

  // British to American Test
  /*
  test('Translate to American English - 01', () => {
    assert.equal(translator.translate(string11, option2), translate11);
  });
  test('Translate to American English - 02', () => {
    assert.equal(translator.translate(string12, option2), translate12);
  });
  test('Translate to American English - 03', () => {
    assert.equal(translator.translate(string13, option2), translate13);
  });
  test('Translate to American English - 04', () => {
    assert.equal(translator.translate(string14, option2), translate14);
  });
  test('Translate to American English - 05', () => {
    assert.equal(translator.translate(string15, option2), translate15);
  });
  test('Translate to American English - 06', () => {
    assert.equal(translator.translate(string16, option2), translate16);
  });
  test('Translate to American English - 07', () => {
    assert.equal(translator.translate(string17, option2), translate17);
  });
  test('Translate to American English - 08', () => {
    assert.equal(translator.translate(string18, option2), translate18);
  });
  test('Translate to American English - 09', () => {
    assert.equal(translator.translate(string19, option2), translate19);
  });
  test('Translate to American English - 10', () => {
    assert.equal(translator.translate(string20, option2), translate20);
  });
  */
});
