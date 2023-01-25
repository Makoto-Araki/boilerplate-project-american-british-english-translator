const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  const opt1 = 'american-to-british';
  const opt2 = 'british-to-american';
  
  const in01 = 'Mangoes are my favorite fruit.';
  const in02 = 'I ate yogurt for breakfast.';
  const in03 = "We had a party at my friend\'s condo.";
  const in04 = 'Can you toss this in the trashcan for me?';
  const in05 = 'The parking lot was full.';
  const in06 = 'Like a high tech Rube Goldberg machine.';
  const in07 = 'To play hooky means to skip class or work.';
  const in08 = 'No Mr. Bond, I expect you to die.';
  const in09 = 'Dr. Grosh will see you now.';
  const in10 = 'Lunch is at 12:15 today.';
  
  const out01 = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
  const out02 = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
  const out03 = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
  const out04 = 'Can you toss this in the <span class="highlight">bin</span> for me?';
  const out05 = 'The <span class="highlight">car park</span> was full.';
  const out06 = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
  const out07 = 'To <span class="highlight">bunk off</span> means to skip class or work.';
  const out08 = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
  const out09 = '<span class="highlight">Dr</span> Grosh will see you now.';
  const out10 = 'Lunch is at <span class="highlight">12.15</span> today.';
  
  test('Translate to British English - 01', () => {
    assert.equal(translator.translate(in01, opt1), out01);
  });
  test('Translate to British English - 02', () => {
    assert.equal(translator.translate(in02, opt1), out02);
  });
  test('Translate to British English - 03', () => {
    assert.equal(translator.translate(in03, opt1), out03);
  });
  test('Translate to British English - 04', () => {
    assert.equal(translator.translate(in04, opt1), out04);
  });
  test('Translate to British English - 05', () => {
    assert.equal(translator.translate(in05, opt1), out05);
  });
  test('Translate to British English - 06', () => {
    assert.equal(translator.translate(in06, opt1), out06);
  });
  test('Translate to British English - 07', () => {
    assert.equal(translator.translate(in07, opt1), out07);
  });
  test('Translate to British English - 08', () => {
    assert.equal(translator.translate(in08, opt1), out08);
  });
  test('Translate to British English - 09', () => {
    assert.equal(translator.translate(in09, opt1), out09);
  });
  test('Translate to British English - 10', () => {
    assert.equal(translator.translate(in10, opt1), out10);
  });
});
