const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  const option1 = 'american-to-british';
  const option2 = 'british-to-american';
  const input01 = 'Mangoes are my favorite fruit.';
  const input02 = 'I ate yogurt for breakfast.';
  const input03 = "We had a party at my friend\'s condo.";
  const input04 = 'Can you toss this in the trashcan for me?';
  const input05 = 'The parking lot was full.';
  const input06 = 'Like a high tech Rube Goldberg machine.';
  const input07 = 'To play hooky means to skip class or work.';
  const input08 = 'No Mr. Bond, I expect you to die.';
  const input09 = 'Dr. Grosh will see you now.';
  const input10 = 'Lunch is at 12:15 today.';
  const output01 = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
  const output02 = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
  const output03 = '';
  const output04 = '';
  const output05 = '';
  const output06 = '';
  const output07 = '';
  const output08 = '';
  const output09 = '';
  const output10 = '';
  
  test('Translate to British English - 01', () => {
    assert.equal(translator.translate(input01, option1), output01);
  });
  test('Translate to British English - 02', () => {
    assert.equal(translator.translate(input02, option1), output02);
  });
});
