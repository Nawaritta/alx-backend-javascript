const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('return sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('add negative numbers', () => {
      expect(calculateNumber('SUM', -1, -4.8)).to.equal(-6);
    });

    it('add a positive and a negative numbers', () => {
      expect(calculateNumber('SUM', -1.5, 2)).to.equal(1);
    });
  });

  describe('sUBTRACT', () => {
    it('return result of subtraction', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('subtract negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1, -4.8)).to.equal(4);
    });

    it('subtract a positive and a negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.5, 2)).to.equal(-4);
    });
  });

  describe('dIVIDE', () => {
    it('should return result of division when b is not 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('return "Error" when b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
