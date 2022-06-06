const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs.js');

module.exports = Router()
  .get('/:id', (req, res) => {
      const id = req.params.id;
      const zodiacSign = zodiacs.find((zodiac) => zodiac.id = id);
      res.json(zodiacSign);
  })

  .get('/', (req, res) => {
      const zodiacList = zodiacs.map(({ id, name }) => ({ id, name }));
      res.json(zodiacList);
  });