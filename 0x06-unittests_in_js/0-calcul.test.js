const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('return sum of rounded numbers negtive floats', () => {
    assert.equal(calculateNumber(-1.7, -2), -4);
  });
  it('return sum of rounded numbers', () => {
    assert.equal(calculateNumber(-1, -2.7), -4);
  });
});
