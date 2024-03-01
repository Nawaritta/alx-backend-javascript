// calculateNumber test

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('return sum of rounded numbers', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('add negative numbers', () => {
    assert.equal(calculateNumber(-1, -4.8), -6);
  });

  it('add a positive and a negative numbers', () => {
    assert.equal(calculateNumber(-1.5, 2), 1);
  });
  it('add a zero to a negative number', () => {
    assert.equal(calculateNumber(-1.5, 0), -1);
  });

  it('add a zero to a positive number', () => {
    assert.strictEqual(calculateNumber(1.5, 0), 2);
  });

  it('add two int', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('add int and float', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

 it('add floats', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
