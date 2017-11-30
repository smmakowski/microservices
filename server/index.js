const http = require('http');
const static = require('node-static');
const url = require('url');
const PORT = process.env.PORT || 3000;
const fileServer = new static.Server('./');

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
  console.log(pUrl);
  let dateQuery;
  let timeStamp = {
    naturalDate: null,
    unixDate: null
  }
  if (req.method === 'GET' && pUrl.path === '/') {
    statusCode = 200;
  } else if (req.method === 'GET' && pUrl.path !== '/') {
    statuscCode = 404;
    dateQuery = pUrl.path.slice(1);

  } else {
    // throw error for POSTS/UPDATES/DELETES
    statusCode = 404;
  }
  res.writeHead(statusCode);
  console.log('STATUS CODE :' + res.statusCode);
  console.log('HEADER : ' + res.headers);
  res.end();
});

server.listen(PORT, function() {
  console.log('Now listening on PORT number ' + PORT);
});

module.exports = server;
