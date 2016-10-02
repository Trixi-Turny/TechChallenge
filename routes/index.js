var express = require('express')
var router = express.Router()
var partial = require('express-partial')
var app = express()
var $ = null

var request = require('request')
var cheerio = require('cheerio')

/* GET home page. */
router.get('/', function(req, res, body) {
  $ = cheerio.load(body)
  res.render('index', {
    title: 'Tech Challenge',
    centerStory: "Once upon a time, there was a big bad wolf."
  })
})

/* POST */
router.post('/', function(req, res, next) {
  console.log(req.body.textarea1)
})

module.exports = router