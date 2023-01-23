'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log('AAA');
      translator.translate(req.body.text, req.body.locale);
      console.log('BBB');
      // { text: '', locale: 'american-to-british' }
      // { text: '', locale: 'british-to-american' }
    });
};
