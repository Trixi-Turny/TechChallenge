var express = require('express')
var router = express.Router()
var partial = require('express-partial')
var app = express();
var request = require('request')
var stories = {}
var storyBook = []
var defaultCenter = "Once upon a time, there was a big bad wolf."
var defaultContent = "";
var storyLine0;
var storyLine1;
var storyLine2;
var storyLine3;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Tech Challenge',
      centerStory: defaultCenter
        // storyLine: defaultContent
    });
  })
  /* POST */
router.post('/', function(req, res, next) {
  res.render('index', {
    storyLine0: checkIfNull0(req),
    storyLine1: checkIfNull1(req),
    storyLine2: checkIfNull2(req),
    storyLine3: checkIfNull3(req),
    centerStory: defaultCenter
  })
});


router.get('/:id', function(req, res, next) {
  var index = req.params.id;


  res.render('index', {
    centerStory: storyLine0,
    storyLine0: "",
    storyLine1: "",
    storyLine2: "",
    storyLine3: ""
  });
  console.log("the link was clicked");
  console.log(req.body.data);
});


function checkIfNull0(req) {
  if (req.body.storyLine0) {
    storyLine0 = req.body.storyLine0;
  } else if (req.body.textarea0) {
    storyLine0 = req.body.textarea0;
  }
  return storyLine0
}

function checkIfNull1(req) {
  if (req.body.storyLine1) {
    storyLine1 = req.body.storyLine1;
  } else if (req.body.textarea1) {
    storyLine1 = req.body.textarea1;
  }
  return storyLine1
}

function checkIfNull2(req) {
  if (req.body.storyLine2) {
    storyLine2 = req.body.storyLine2;
  } else if (req.body.textarea2) {
    storyLine2 = req.body.textarea2;
  }
  return storyLine2
}

function checkIfNull3(req) {
  if (req.body.storyLine3) {
    storyLine3 = req.body.storyLine3;
  } else if (req.body.textarea3) {
    storyLine3 = req.body.textarea3;
  }
  return storyLine3
}


function makeCenterStory(req, index) {
  var index = index;
  switch (index) {
    case 0:

      defaultCenter = storyLine0;

      return defaultCenter
      break

    case 1:
      defaultCenter = storyLine1;
      return defaultCenter
      break
    case 2:
      defaultContent = storyLine2;
      return defaultCenter
      break

    case 3:
      defaultCenter = storyLine3;
      return defaultCenter
    default:
  }
}


module.exports = router