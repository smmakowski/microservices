const helpers = require('../util/helpers.js')
const chai = require('chai');
const expect = chai.expect;

describe('helper functions', function() {
  describe('createHeadersObject', function() {
    const ip = '::ffff:192.168.1.10';
    const lang = 'en-US,en;q=0.5';
    const soft = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
    const parserObj = helpers.createHeadersObject(ip, lang, soft);
    xit('return an object with keys: ipaddress, language, & software', function() {
      expect(parserObj).to.be.an('object');
      expect(parserObj).to.have.keys('ipaddress', 'language', 'software');
    });
    xit ('the object should have the required values', function() {
      expect(parserObj.ipaddress).to.equal('92.168.1.10');
      expect(parserObj.language).to.equal('en-US');
      expect(parserObj.software).to.equal('Windows NT 6.3; Trident/7.0; rv:11.0');
    });
  });
});
