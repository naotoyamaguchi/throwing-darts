let chai = require('chai');
let scoreThrows = require('../index.js');
chai.should();

describe('Throwing dart score', function() {

  it('should be an number', function() {
    scoreThrows([1, 2, 3, 4]).should.be.a('number');
  });

  it('should return score 140' , function() {
    scoreThrows([1, 2, 3, 4]).should.equal(140);
  });

  it('should return a score of 0', function() {
    scoreThrows([15, 20, 30]).should.equal(0);
  });

  it('should return a score of 15', function() {
    scoreThrows([1, 5, 11]).should.equal(15);
  });

  it('should return false because it has an invalid input', function() {
    scoreThrows([1, 'a', 11]).should.equal(false);
  });

  it('should return false because it has a negative integer', function() {
    scoreThrows([-1, 3, 4]).should.equal(false);
  });


});