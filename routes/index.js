var express = require('express')
var router = express.Router()
var partial = require('express-partial')
var app = express();
var request = require('request')
var Node = require("tree-node")



var stories = {}
var storyBook = []
var defaultCenter = "Once upon a time, there was a big bad wolf."
var defaultContent = "";
var storyLine0;
var storyLine1;
var storyLine2;
var storyLine3;
var root = new Node();
var center = new Node
var n0 = new Node
var n1 = new Node
var n2 = new Node
var n3 = new Node

root.appendChild(center);
center.appendChild(n0)
center.appendChild(n1)
center.appendChild(n2)
center.appendChild(n3)


center.data({
  centerStory: ""
});

n0.data({
  storyLine: ""
});
n1.data({
  storyLine: ""
});
n2.data({
  storyLine: ""
});
n3.data({
  storyLine: ""
});

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

  for (var i = 0; i < Node.length; i++) {
    if (req.body.textarea0) {
      n0.storyLine = req.body.textarea0
      console.log("it had something in it!");
    } else {
      console.log("empty")
    }
    if (req.body.textarea1) {
      n1.storyLine = req.body.textarea1
    }
    if (req.body.textarea2) {
      n2.storyLine = req.body.textarea2
    }
    if (req.body.textarea3) {
      n3.storyLine = req.body.textarea3
    }
    res.render('index', {
      storyLine0: n0.storyLine,
      storyLine1: n1.storyLine,
      storyLine2: n2.storyLine,
      storyLine3: n3.storyLine,
      centerStory: defaultCenter
    });
  }
});
router.get('/:id', function(req, res, next) {
  var index = req.params.id;

  if (index == 0) {
    defaultCenter = storyLine0;
  } else if (index == 1) {
    defaultCenter = storyLine1;
  } else if (index == 2) {
    defaultCenter = storyLine2;
  } else {
    defaultCenter = storyLine3;
  }
  var empty = true;
  res.render('index', {
    centerStory: defaultCenter
  });

  router.post('/', function(req, res, next) {
    if (req.body.centerStory != "Once upon a time, there was a big bad wolf.") {
      var empty = false
      req.body.storyLine0.empty()
      res.render('index', {
        centerStory: defaultCenter,
        storyLine0: empty,
        storyLine1: empty,
        storyLine2: empty,
        storyLine3: empty
      })
    }
  });

})


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



module.exports = router