const ShortUrl = require('../ShortUrl.js');
const chai = require('chai');
const expect = chai.expect;

describe('ShortUrl class', function() {
  let inst = new ShortUrl();
  console.log(inst);
  const num = 12345;
  const base64 = ShortUrl.encode(num);
  // const backtToNum = ShortUrl.decode(base64);
  console.log(base64);
  describe('encode', function() {
    it('should take a integer number and return base 64 string', function() {
      expect(base64).to.be.a('string');
      expect(base64).to.equal('hnd');
    });
  });
  describe('decode', function() {
    xit('should take a base64 string and return an integer', function() {
      expect(backtToNum).to.be.a('number');
      expect(backToNum).to.equal(12345);
    });
  });
  describe('instance of ShortUrl', function() {
    xit('should have keys: originalUrl and shortUrl', function() {
      expect()
    })
  });
});
