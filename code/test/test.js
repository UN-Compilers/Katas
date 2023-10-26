var { expect } = require('chai');
let { myFunction } = require('../src/code');

describe("Kata 1 Un Compiles", function() {
  describe("A nice describe", function(){
    it("An it message", function() {
      expect(myFunction()).to.equal(false);
    });
  });
});
