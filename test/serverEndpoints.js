const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('server', function() {
  describe('main page', function() {
    it('should respond to GET requests or / 200 status code', function() {
      request('http://127.0.0.1:3000/', function(error, response, body) {
        const bodyString = body.toString();
        expect(bodyString.search('<!DOCTYPE HTML>')).to.equal(true);
        done();
      });
    });
  });
  describe('timestamp microservice', function() {
    const query = 1450137600;
    it('should respond to GET requests for /* 200 status code', function(done) {
      request('http://127.0.0.1:3000/' + query, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should send back parsable stringified JSON', function(done) {
      request('http://127.0.0.1:3000/' + query, function(error, response, body) {
        expect(JSON.parse.bind(this, body)).to.not.throw();
        done();
      });
    });

    it('should send back an object', function(done) {
      request('http://127.0.0.1:3000/' + query, function(error, response, body) {
        var parsedBody = JSON.parse(body);
        expect(parsedBody).to.be.an('object');
        done();
      });
    });
    it('sent object should have properties "unix" and "natural"', function(done) {
      request('http://127.0.0.1:3000/' + query, function(error, response, body) {
        var parsedBody = JSON.parse(body);
        expect(parsedBody).to.have.all.keys('natural', 'unix');
        done();
      });
    });
  });
});
