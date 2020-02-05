const chai = require('chai');
const expect = chai.expect;
const utils = require('./main');

describe('Test sum()', () => {
  it('Test 1', () => {
    const total = utils.sum(1, 2);
    expect(total).to.equal(3);
  });
})


describe('Test classifyStudent()', function () {
  it('should be not good with mark < 5', function () {
    for (let i = 1; i < 5; i++) {
      expect(utils.classifyStudent(i)).to.equal('Not good');
    }
  });

  it('should be Good with mark >= 5 and < 8', function () {
    for (let i = 5; i <= 8; i++) {
      expect(utils.classifyStudent(i)).to.equal('Good');
    }
  });

  it('should be Excellent!!! with mark >= 9 and <= 10', function () {
    for (let i = 9; i <= 10; i++) {
      expect(utils.classifyStudent(i)).to.equal('Excellent!!!');
    }
  });

  it('should say invalid mark if input negative number', function () {
    expect(utils.classifyStudent(-1)).to.equal('Invalid mark');
  });

  it('should say invalid mark if input greater than 10', function () {
    expect(utils.classifyStudent(11)).to.equal('Invalid mark');
  });
});
