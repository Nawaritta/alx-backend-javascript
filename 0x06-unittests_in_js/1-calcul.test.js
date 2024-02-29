const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('return sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('add negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1, -4.8), -6);
    });

    it('add a positive and a negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.5, 2), 1);
    });
  });

  describe('sUBTRACT', () => {
    it('return result of subtraction', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('substract negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -4.8), 4);
    });

    it('substract a positive and a negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 2), -3);
    });
  });

  describe('dIVIDE', () => {
    it('should return result of division when b is not 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('return "Error" when b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
