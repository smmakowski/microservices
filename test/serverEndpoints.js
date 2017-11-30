const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/index.js');
const should = chai.should();

chai.use(chaiHttp);

describe('API endpoints', function() {
  describe('Main Page', function(){
    xit('should load index.html on / GET', function() {

    });
  })
  describe('Microservice', function() {
    xit('should provide a stringified object upon a succes', function() {

    });
  });
});
