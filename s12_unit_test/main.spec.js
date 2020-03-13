import chai from 'chai';
import utils from './main';
const expect = chai.expect;

describe('Test missingNum()', () => {
  it('should return 5 if missing 5', () => {
    const arr = [1, 2, 4, 3, 6, 8, 7, 9, 10];
    const result = utils.missingNum(arr);
    expect(result).to.equal(5);
  });

  it('should return 1 if missing 1', () => {
    const arr = [2, 4, 3, 5, 6, 8, 7, 9, 10];
    const result = utils.missingNum(arr);
    expect(result).to.equal(1);
  });

  it('should return 10 if missing 10', () => {
    const arr = [1, 2, 4, 3, 6, 8, 7, 9, 5];
    const result = utils.missingNum(arr);
    expect(result).to.equal(10);
  });
});

// describe('Test missingNum2()', () => {
// });