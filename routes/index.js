var express = require('express');
var router = express.Router();
var partial = require('express-partial');
var app = express();

app.use(partial());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Tech Challenge',
    centerStory: "Once upon a time, there was a big bad wolf."
  });
  router.post('/', function(req, res, next) {
    var story = req.body.textBoxValue0
    console.log(story);
    res.render('index', {
      centerStory: "Hi Gorgeous Girl",
      title: "Something is working"
    });
  });
});
module.exports = router;