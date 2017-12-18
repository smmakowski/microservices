const helpers = require('../util/helpers.js');
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.get('/*', (req, res) => {
  if (req.url.slice(1) === ''){
    res.sendFile(path.join(__dirname + '/../index.html'));
  } else { // else process the time;
    let dateQuery = req.url.slice(1); // get dateQuery
    if (isNaN(dateQuery)) {
      // do nothing
    } else {
      dateQuery = parseInt(dateQuery, 10);
    }
    console.log(typeof dateQuery);
    const timeStamp = helpers.processDate(dateQuery);
    console.log('TimeStamp = ', timeStamp);
    res.send('dateQUery is =' +timeStamp);
  }
});

app.listen(PORT, () => {
  console.log('App is listening on PORT ' + PORT);
});
