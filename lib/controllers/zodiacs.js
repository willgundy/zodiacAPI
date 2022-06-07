const { Router } = require('express');
const { zodiacInfo } = require('../../data/zodiacData');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const zodiacList = zodiacInfo.find((zodiac) => zodiac.id === id);
    res.json(zodiacList);
  })

  .get('/', (req, res) => {
    const zodiacSign = zodiacInfo.map(({ id, name }) => ({ id, name }));
    res.json(zodiacSign);
  });