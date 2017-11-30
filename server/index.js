const http = require('http');
const static = require('node-static');
const PORT = 8000;
const fileServer = new static.Server('./');

const server = http.createServer(function(req, res) {
  let timeStamp = {
    naturalDate: null,
    unixDate: null
  }

});

server.listen(PORT, function() {
  console.log('Now listening on PORT number ' + PORT);
});

module.exports = server;
