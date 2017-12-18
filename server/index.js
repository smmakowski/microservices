const helpers = require('../util/helpers.js');
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/../index.html'));
});

app.get('/timestamp/:date', (req, res) => { // timestamp endpoint
    let dateQuery = req.params.date; // get dateQuery
    if (isNaN(dateQuery)) {
      dateQuery = Date.parse(dateQuery);// if not already unix, attempt parsedate
    } else {
      dateQuery = parseInt(dateQuery, 10) * 1000; // bc Date const use ms, multiply
    }

    const timeStamp = helpers.processDate(dateQuery); // create timestamp from
    res.status(200).json(timeStamp); // send with a 200 status
});

app.get('/request-header-parser/*', (req, res) => {
  const parserObj = helpers.createHeadersObject(req.connection.remoteAddress,
  req.headers['accept-language'], req.headers['user-agent']);
  console.log('PARSEROBJ = ', parserObj);
  console.log('PARSEOBJ TYPE ', typeof parserObj);
  res.status(200);
  console.log(res.statusCode);
  res.send(JSON.stringify(parserObj));
});

app.listen(PORT, () => {
  console.log('App is listening on PORT ' + PORT);
});
