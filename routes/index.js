var express = require('express')
var router = express.Router()
var partial = require('express-partial')

var request = require('request')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Tech Challenge',
    centerStory: "Once upon a time, there was a big bad wolf."
  })
})

/* POST */
router.post('/', function(req, res, next) {
  console.log(req.body) // <- all your values
})

module.exports = router