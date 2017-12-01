const http = require('http');
const static = require('node-static');
const url = require('url');
const PORT = process.env.PORT || 3000;
// const fileServer = new static.Server('./');
const fs = require('fs');

function processDate(date) {
  if (date.search(/\D/g)) { // if any letters, indicating possible natural date
    console.log('NATURAL DATE')
  } else {
    console.log('ALL NUMBERS');
  }
}

const server = http.createServer(function(req, res) {
  const defaultCorsHeaders = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10 // in seonds
  };

  let statusCode = 200;
  const pUrl = url.parse(req.url, true);
  // console.log(pUrl);
  let dateQuery;

  let timeStamp = {
    unix: null,
    natural: null
  };

  if (req.method === 'GET' && pUrl.path === '/') { // get Main page
    fs.readFile('index.html', function(err, data) { // readfile and send
      console.log(data);
      res.setHeader('content-type', 'text/html');
      res.writeHead(200);
      res.end(data);
    });
  } else if (req.method === 'GET' && pUrl.path !== '/') { // if there is a queryString
    dateQuery = pUrl.path.slice(1);
    res.writeHead(statusCode);
    res.end(JSON.stringify(timeStamp));
  } else {
    // throw error for POSTS/UPDATES/DELETES
    statusCode = 404;
  }
  // res.writeHead(statusCode);
  // console.log('STATUS CODE :' + res.statusCode);
  // console.log('HEADER : ' + res.headers);
  // console.log('BODY: ' + res.body);
  // res.end();
});

server.listen(PORT, function() {
  console.log('Now listening on PORT number ' + PORT);
});

module.exports = server;
