const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  
  // locale
  const opt1 = 'american-to-british';
  const opt2 = 'british-to-american';
  
  // American to British
  const bef01 = 'Mangoes are my favorite fruit.';
  const bef02 = 'I ate yogurt for breakfast.';
  const bef03 = "We had a party at my friend\'s condo.";
  const bef04 = 'Can you toss this in the trashcan for me?';
  const bef05 = 'The parking lot was full.';
  const bef06 = 'Like a high tech Rube Goldberg machine.';
  const bef07 = 'To play hooky means to skip class or work.';
  const bef08 = 'No Mr. Bond, I expect you to die.';
  const bef09 = 'Dr. Grosh will see you now.';
  const bef10 = 'Lunch is at 12:15 today.';
  const aft01 = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
  const aft02 = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
  const aft03 = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
  const aft04 = 'Can you toss this in the <span class="highlight">bin</span> for me?';
  const aft05 = 'The <span class="highlight">car park</span> was full.';
  const aft06 = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
  const aft07 = 'To <span class="highlight">bunk off</span> means to skip class or work.';
  const aft08 = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
  const aft09 = '<span class="highlight">Dr</span> Grosh will see you now.';
  const aft10 = 'Lunch is at <span class="highlight">12.15</span> today.';
  
  // Additional test
  const add01 = 'I write unit name kilogram and kilometer';
  const add02 = 'From 14:15 to 17:15';
  const add03 = 'kilogram and kilometer';
  const res01 = 'I write unit name <span class="highlight">kilogramme</span> and <span class="highlight">kilometre</span>';
  const res02 = 'From <span class="highlight">14.15</span> to <span class="highlight">17.15</span>';
  const res03 = '<span class="highlight">kilogramme</span> and <span class="highlight">kilometre</span>';
  
  // British to American
  const bef11 = 'We watched the footie match for a while.';
  const bef12 = 'Paracetamol takes up to an hour to work.';
  const bef13 = 'First, caramelise the onions.';
  const bef14 = 'I spent the bank holiday at the funfair.';
  const bef15 = 'I had a bicky then went to the chippy.';
  const bef16 = 'I\'ve just got bits and bobs in my bum bag.';
  const bef17 = 'The car boot sale at Boxted Airfield was called off.';
  const bef18 = 'Have you met Mrs Kalyani?';
  const bef19 = 'Prof Joyner of King\'s College, London.';
  const bef20 = 'Tea time is usually around 4 or 4.30.';
  const aft11 = 'We watched the <span class="highlight">soccer</span> match for a while.';
  const aft12 = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
  const aft13 = 'First, <span class="highlight">caramelize</span> the onions.';
  const aft14 = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
  const aft15 = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
  const aft16 = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
  const aft17 = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
  const aft18 = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
  const aft19 = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
  const aft20 = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
  
  // American to British Test
  test('Translate to British English - 01', () => {
    assert.equal(translator.translate(bef01, opt1), aft01);
  });
  test('Translate to British English - 02', () => {
    assert.equal(translator.translate(bef02, opt1), aft02);
  });
  test('Translate to British English - 03', () => {
    assert.equal(translator.translate(bef03, opt1), aft03);
  });
  test('Translate to British English - 04', () => {
    assert.equal(translator.translate(bef04, opt1), aft04);
  });
  test('Translate to British English - 05', () => {
    assert.equal(translator.translate(bef05, opt1), aft05);
  });
  test('Translate to British English - 06', () => {
    assert.equal(translator.translate(bef06, opt1), aft06);
  });
  test('Translate to British English - 07', () => {
    assert.equal(translator.translate(bef07, opt1), aft07);
  });
  test('Translate to British English - 08', () => {
    assert.equal(translator.translate(bef08, opt1), aft08);
  });
  test('Translate to British English - 09', () => {
    assert.equal(translator.translate(bef09, opt1), aft09);
  });
  test('Translate to British English - 10', () => {
    assert.equal(translator.translate(bef10, opt1), aft10);
  });
  
  // Additional Test
  test('Additional Test - 01', () => {
    assert.equal(translator.translate(add01, opt1), res01);
  });
  test('Additional Test - 02', () => {
    assert.equal(translator.translate(add02, opt1), res02);
  });
  test('Additional Test - 03', () => {
    assert.equal(translator.translate(add03, opt1), res03);
  });
  
  // British to American Test
  //test('Translate to American English - 01', () => {
  //  assert.equal(translator.translate(bef11, opt2), aft11);
  //});
  //test('Translate to American English - 02', () => {
  //  assert.equal(translator.translate(bef12, opt2), aft12);
  //});
  //test('Translate to American English - 03', () => {
  //  assert.equal(translator.translate(bef13, opt2), aft13);
  //});
  //test('Translate to American English - 04', () => {
  //  assert.equal(translator.translate(bef14, opt2), aft14);
  //});
  //test('Translate to American English - 05', () => {
  //  assert.equal(translator.translate(bef15, opt2), aft15);
  //});
  //test('Translate to American English - 06', () => {
  //  assert.equal(translator.translate(bef16, opt2), aft16);
  //});
  //test('Translate to American English - 07', () => {
  //  assert.equal(translator.translate(bef17, opt2), aft17);
  //});
  //test('Translate to American English - 08', () => {
  //  assert.equal(translator.translate(bef18, opt2), aft18);
  //});
  //test('Translate to American English - 09', () => {
  //  assert.equal(translator.translate(bef19, opt2), aft19);
  //});
  //test('Translate to American English - 10', () => {
  //  assert.equal(translator.translate(bef20, opt2), aft20);
  //});
});
