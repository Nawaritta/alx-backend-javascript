const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('return sum of rounded numbers negtive floats', () => {
    assert.equal(calculateNumber(-2.8, -2), -5);
  });
  it('return sum of rounded numbers', () => {
    assert.equal(calculateNumber(-1, -2.8), -4);
  });
  it('rounds the first number', () => {
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(1.2, 0), 1);
    assert.equal(calculateNumber(1.8, 0), 2);
  });
  it('rounds the second number', () => {
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 1.2), 1);
    assert.equal(calculateNumber(0, 1.8), 2);
  });
});
