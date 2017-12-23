const helpers = require('../util/helpers.js');
const ShortUrl = require('../ShortUrl.js');
const validUrl = require('valid-url');
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;
const rootUrl = process.env.ROOT_URL|| 'localhost:'
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'microservices';

MongoClient.connect(dbUrl, (err, client) => {
  console.log('successfully connectd to db server');

  const db = client.db(dbName);

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

    console.log(res.statusCode);
    res.status(200).json(parserObj);
  });

  app.get('/url-shortener/new/:url*', (req,res) => {
    const urlsCollection = db.collection('urls');
    const urlsCountCollection = db.collection('urlsCount');
    let count;
    const url = req.url.slice(19);
    // there are some issues with the url. it' cutting off the url at the first / in http:

    if (validUrl.isUri(url)) {
      urlsCountCollection.find({}).toArray((err, docs) => { // get the count
        if (err) {
          res.json({error: 'A server error has occurred.'});
        }
        count = docs[0].count;
        console.log('BEFORE MOD', docs[0]);
        const newShortUrl = new ShortUrl(url, count); /// create new url obj for insertion
        urlsCollection.insert(newShortUrl, function(err, doc) { // insert new site
          if (err) {
            res.json({error: 'A server error has occurred.'});
          }
          urlsCountCollection.update(docs[0], {$set: {count: count + 1}}, (err, modded) => { // update teh cound
            if (err) {
              res.json({error: 'A server error has occurred.'});
            }
            res.json(newShortUrl);
          });
        });
        // const shortenedObj = new ShortUrl(req.params.url, count);
        // console.log(shortenedObj.shortUrl);
      });

    } else {
      res.json({error: 'Url provided is not a valid url.'});
    }

    // add url to the database
    // get the ID from the database or the new record (with monk or mongoose)
    // send JSON response like...
      // {original_url:'http://www.google.com',short_url:'https://little-url.herokuapp.com/8101'}

  });

  app.get('/url-shortener/:url', (req, res) => {
    const collection = db.collection('urls');

    if (req.url.slice(15) === 'new/') { // if url is like 'new/'' but without :url
      res.json({error: 'No url provided.'});
    } else {
      collection.find({shortUrl: req.params.url}).toArray((err, docs) => { // look for short in db
        console.log('I found...', docs);
        if (docs.length === 0) { // if not then send
          res.json({error: 'This short url is not in database.'});
        } else { // redirect to url
          res.redirect(docs[0].originalUrl);
        }
      });
    }
  });

  app.listen(PORT, () => {
    console.log(`Now listening on ${rootUrl}${PORT}`);
  });

})
