'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let result = translator.translate(req.body.text, req.body.locale);
      res.json({ translation: result });
      //console.log(result);
      // { text: '', locale: 'american-to-british' }
      // { text: '', locale: 'british-to-american' }
    });
};
