const ShortUrl = require('../ShortUrl.js');
const chai = require('chai');
const expect = chai.expect;

describe('ShortUrl class', function() {
  let inst = new ShortUrl('http://www.google.com', 12345);
  console.log(inst);
  const num = 12345;
  const shortString = ShortUrl.encode(num);
  const backToNum = ShortUrl.decode(shortString);
  console.log(shortString);
  describe('encode', function() {
    it('should take a integer number and return base 64 string', function() {
      expect(shortString).to.be.a('string');
      expect(shortString).to.equal('dnh');
    });
  });
  describe('decode', function() {
    it('should take a shortString string and return an integer', function() {
      expect(backToNum).to.be.a('number');
      expect(backToNum).to.equal(12345);
    });
  });
  describe('instance of ShortUrl', function() {
    it('should have keys with strings for value: originalUrl and shortUrl', function() {
      expect(inst).to.have.keys('originalUrl', 'shortUrl');
      expect(inst.originalUrl).to.be.a('string');
      expect(inst.shortUrl).to.be.a('string');
    });
    it('should call encode within constructor when setting shortUrl field', function() {
      expect(inst.shortUrl).to.equal('dnh');
    });  
  });
});
