const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/index.js');
// const sinon = require('sinon');
const should = chai.should();
const expect = chai.expect;
const request = supertest(server);

describe('API endpoints', function() {
  describe('Main Page', function(){
    xit('should send index.html on / GET', function() {

    });
  })
  describe('Microservice valid endpoints', function() {
    this.timeout(5000);
    it('should provide a 200 status on /* GET', function() {
      request.get('/1450137600')
      // .expect(404)
      .end(function(err,res) {
        expect(res.body).to.have.lengthOf(2);
        done(err);
      });
    });
    xit('should provide json response on /* GET', function() {
      return chai.request(server)
        .get('/1450137600')
        .end(function(err, res) {
          res.should.be.json;
          done();
        });
    });
    xit('json, when parsed should be an object on /* GET', function() {
      return chai.request(server)
        .get('/1450137600')
        .end(function(err, res) {
          res.body.should.be.a('number');
          done();
        });
    });
    xit('object should have correct unixTime on /* GET', function() {
      return chai.request(server)
        .get('/1450137600')
        .end(function(err, res) {
          console.log(res.body);
          req.body.unixDate.should.equal(1450137600);
          done();
        });
    });
    it('json, when parsed should be an object on /* GET', function() {
      chai.request(server)
        .get('/1450137600')
        .end(function(err, res) {
          res.body.should.be.a('string');
          done();
        });
    });
    it('object should have properties with \'null\' values if invalid URL', function() {
      chai.request(server)
        .get('/1450137600')
        .end(function(err, res) {
          ob
          done();
        });
    });
  });
});
