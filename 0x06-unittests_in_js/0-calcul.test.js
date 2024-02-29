// calculateNumber test

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('return sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('add negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, -4.8), -6);
  });

  it('add a positive and a negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.5, 2), 1);
  });
});
