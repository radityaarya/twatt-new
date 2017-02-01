const express = require('express');
const router = express.Router();
const Twitter = require('twitter');
var config = require('../config.json')

var client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

router.get('/newtweet', function (req, res, next) {
  var cekStatus = {status: req.query.q}

  client.post('statuses/update', cekStatus, function(error, tweets, response) {
    if(!error){
      res.send(tweets)
    }
  })

})


router.get('api/twitter/callback', function(req, res, next) {
    res.send('wrong');
})


module.exports = router;
