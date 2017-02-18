let chai = require('chai');
let scoreThrows = require('../index.js');
chai.should();

describe('Throwing darts test', function() {
  var throwTest;
  beforeEach(function() {
    console.log(scoreThrows([1, 5, 11]));
  });

  it('should be an array', function() {
    throwTest.should.be.an('array');
  });


});