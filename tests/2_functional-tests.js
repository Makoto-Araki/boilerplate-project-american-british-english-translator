const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  /*
  test('Translation with text and locale fields', (done) => {
    chai
    .request(server)
    .post('/api/translate')
    .send({
      text: 'Mangoes are my favorite fruit.',
      locale: 'american-to-british',
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.type, 'application/json');
      assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
      done();
    });
  });
  */
  /*
  test('Translation with text and invalid locale field', (done) => {
    chai
    .request(server)
    .post('api/translate')
    .send({
      text: 'Mangoes are my favorite fruit.',
      locale: 'american-to-hawaiian',
    })
  });
  */
});
