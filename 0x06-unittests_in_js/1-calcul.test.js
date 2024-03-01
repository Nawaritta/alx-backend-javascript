const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('return sum of rounded numbers', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('add negative numbers', () => {
      assert.equal(calculateNumber('SUM', -1, -4.8), -6);
    });

    it('add a positive and a negative numbers', () => {
      assert.equal(calculateNumber('SUM', -1.5, 2), 1);
    });
  });

  describe('sUBTRACT', () => {
    it('return result of subtraction', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('substract negative numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', -1, -4.8), 4);
    });

    it('substract a positive and a negative numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.5, 2), -3);
    });
    it('substract positive ints', () => {
        assert.equal(calculateNumber('SUBTRACT', 4, 5), -1);
      });

    it('substract zero', () => {
        assert.equal(calculateNumber('SUBTRACT', 8, 0), 8);
      });

      it('substract negtive int', () => {
        assert.equal(calculateNumber('SUBTRACT', -8, -1), -7);
      });
  });

  describe('dIVIDE', () => {
    it('should return result of division when b is not 0', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('return "Error" when b is 0', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('devide positive ints', () => {
        assert.equal(calculateNumber('DIVIDE', 14, 7), 2);
      });
    it('devide negative ints', () => {
        assert.equal(calculateNumber('DIVIDE', -14, -7), 2);
      });

    it('devide negative int and positive int', () => {
        assert.equal(calculateNumber('DIVIDE', -14, 7), -2);
      });
  });
});
