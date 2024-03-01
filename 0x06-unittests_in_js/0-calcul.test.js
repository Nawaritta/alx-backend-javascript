const assert = require('assert');
const calculateNumber = require('./0-calcul');
const{it, describe} = require('mocha');

describe('calculateNumber', () => {
  it('return sum of rounded numbers negtive floats', () => {
    assert.equal(calculateNumber(-2.8, -2), -5);
  });
  it('return sum of rounded numbers', () => {
    assert.equal(calculateNumber(-1, -2.8), -4);

  });
});
