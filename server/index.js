const helpers = require('../util/helpers.js');
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.get('/*', (req, res) => {
  if (req.url.slice(1) === '') { // if no query send .html file
    res.sendFile(path.join(__dirname + '/../index.html'));
  } else { // else process the time;
    let dateQuery = req.url.slice(1); // get dateQuery
    if (isNaN(dateQuery)) {
      dateQuery = Date.parse(dateQuery);// if not already unix, attempt parsedate
      console.log('ATTEMPTED TO PARSE STRING DATE TO = ', dateQuery);
    } else {
      dateQuery = parseInt(dateQuery, 10) * 1000; // bc Date const use ms, multiply
    }

    const timeStamp = helpers.processDate(dateQuery); // create timestamp from
    console.log('TimeStamp = ', timeStamp);
    res.send(timeStamp);
  }
});

app.listen(PORT, () => {
  console.log('App is listening on PORT ' + PORT);
});
