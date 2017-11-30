const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('API endpoints', function() {
  describe('Main Page', function(){
    xit('should load index.html on / GET', function() {

    });
  })
  describe('Microservice', function() {
    it('should provide a 200 status on /* GET', function() {
      chai.request(server)
        .get('/1450137600')
        .end(function(err, res) {
          console.log(res);
          console.log(err);
          res.should.have.status(200)
          .done();
        });
    });
  });
});
