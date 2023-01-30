'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();
  
  app.route('/api/translate')
    .post((req, res) => {
      if (req.body.hasOwnProperty('text') === false) {
        return res.json({ error: 'Required field(s) missing' });
      } else if (req.body.hasOwnProperty('locale') === false) {
        return res.json({ error: 'Required field(s) missing' });
      } else {
        return res.json(translator.translate(req.body.text, req.body.locale));
      }
    });
};
