const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacInfo } = require('../data/zodiacData');

describe('zodiac routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiacs should return a list of zodiac signs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacInfo.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiacs/:id should return zodiac details', async () => {
    const res = await request(app).get('/zodiacs/1');
    const felix = {
      id : "1",
      name : "aquarius",
      dates : "Jan 21 - Feb 19",
      symbol : "Water Bearer"
    };
    expect(res.body).toEqual(felix);
  });

  afterAll(() => {
    pool.end();
  });
});