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
var n1 = new Node
var n2 = new Node
var n3 = new Node
var n4 = new Node

root.appendChild(center);
center.appendChild(n1)
center.appendChild(n2)
center.appendChild(n3)
center.appendChild(n4)


center.data({
  centerStory: ""
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
n4.data({
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
      n1.storyLine = req.body.textarea0
    }
    if (req.body.textarea1) {
      n2.storyLine = req.body.textarea1
    }
    if (req.body.textarea2) {
      n3.storyLine = req.body.textarea2
    }
    if (req.body.textarea3) {
      n4.storyLine = req.body.textarea3
    }
    console.log(root.layer(n1.id));
    res.render('index', {
      storyLine0: n1.storyLine,
      storyLine1: n2.storyLine,
      storyLine2: n3.storyLine,
      storyLine3: n4.storyLine,
      centerStory: defaultCenter
    });
  }
});
router.get('/:id', function(req, res, next) {
  var index = req.params.id;

  if (index == 0) {
    root.up(n1.index);
    defaultCenter = n1.storyLine;
  } else if (index == 1) {
    defaultCenter = n2.storyLine;
    root.up(n2.index);
  } else if (index == 2) {
    defaultCenter = n3.storyLine;
    root.up(n3.index)
  } else if (index == 3) {
    defaultCenter = n4.storyLine;
    root.up(n4.index)
  }
  n1.storyLine = "";
  n2.storyLine = "";
  n3.storyLine = "";
  n4.storyLine = "";
  res.render('index', {
    storyLine0: n1.storyLine,
    storyLine1: n2.storyLine,
    storyLine2: n3.storyLine,
    storyLine3: n4.storyLine,
    centerStory: defaultCenter
  });

  // router.post('/', function(req, res, next) {
  //   if (req.body.centerStory != "Once upon a time, there was a big bad wolf.") {
  //     var empty = false
  //     req.body.storyLine0.empty()
  //     res.render('index', {
  //       centerStory: defaultCenter,
  //       storyLine0: empty,
  //       storyLine1: empty,
  //       storyLine2: empty,
  //       storyLine3: empty
  //     })
  //   }
  // });
})



module.exports = router