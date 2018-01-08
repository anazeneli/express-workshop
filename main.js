var express     = require('express');
var utils       = require('./utils');
var jokeHandler = require('./jokeHandler');

var app = express();

app.get('/jokes', function(req, res) {
  res.send(jokeHandler.createKnockKnock())
})

app.get('/jokes/:type', function(req, res) {
  var selectedJoke = (req.params.type == knocknock) ?
  jokeHandler.createKnockKnock() :
  jokeHandler.createOneLiner()

  res.status(200).send(selectedJoke);
})

app.get('/capitalized/jokes', function(req, res) {
  res.status(200).send(utils.inCaps(jokeHandler.createKnockKnock() ));
})

app.get('/quotes/jokes', function(req, res) {
  res.status(200).send(utils.inQuotes(jokeHandler.createKnockKnock() ));
})


app.get('/jokes/:x', function(req, res) {
  var x = req.params.x
  res.status(200).send(utils.xTimes(x));
})

app.listen(8000, function() {
  console.log('server is listening on ' + 8000)
})
