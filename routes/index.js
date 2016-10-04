var express = require('express')
var router = express.Router()
var partial = require('express-partial')
var app = express();
var request = require('request')
var Node = require("tree-node")
var stories = [];
var centerStories = [];
var storyBook = [];
var storyStarter = "Once upon a time, there was a big bad wolf."
var defaultCenter = storyStarter
var title = "Trixi Turny - Tech Challenge"
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
      title: title,
      centerStory: storyStarter
    });
  })
  /* POST */

router.post('/', function(req, res, next) {
  // for (var i = 0; i < Node.length; i++) {

  if (req.body.textarea0) {
    n1.storyLine = req.body.textarea0
    stories[0] = ({
      "storyLine1": n1.storyLine
    });;
  } else if (req.body.textarea1) {
    n2.storyLine = req.body.textarea1
    stories[1] = ({
      "storyLine2": n2.storyLine
    });

  } else if (req.body.textarea2) {
    n3.storyLine = req.body.textarea2
    stories[2] = ({
      "storyLine3": n3.storyLine
    });

  } else if (req.body.textarea3) {
    n4.storyLine = req.body.textarea3
    stories[3] = ({
      "storyLine4": n4.storyLine
    });
  }

  res.render('index', {
    storyLine0: n1.storyLine,
    storyLine1: n2.storyLine,
    storyLine2: n3.storyLine,
    storyLine3: n4.storyLine,
    centerStory: defaultCenter,
    title: title
  })
});


var storyCounter = 0;

var counter = 0;
centerStories.push(storyStarter);
storyBook.push(stories)
router.get('/:id', function(req, res, next) {

  var index = req.params.id;
  if (index == 0) {

    defaultCenter = n1.storyLine;
    centerStories.push(defaultCenter);
    n1.storyLine = "";
    n2.storyLine = "";
    n3.storyLine = "";
    n4.storyLine = "";
  } else if (index == 1) {
    defaultCenter = n2.storyLine;
    centerStories.push(defaultCenter);
    n1.storyLine = "";
    n2.storyLine = "";
    n3.storyLine = "";
    n4.storyLine = "";

  } else if (index == 2) {
    defaultCenter = n3.storyLine;
    centerStories.push(defaultCenter);
    n1.storyLine = "";
    n2.storyLine = "";
    n3.storyLine = "";
    n4.storyLine = "";

  } else if (index == 3) {
    defaultCenter = n4.storyLine;
    centerStories.push(defaultCenter);
    n1.storyLine = "";
    n2.storyLine = "";
    n3.storyLine = "";
    n4.storyLine = "";

  } else if (index == "start") {

    n1.storyLine = "" + storyBook[storyCounter][storyCounter].storyLine1 // Undefined if empty
    n2.storyLine = "" + storyBook[storyCounter][storyCounter + 1].storyLine2 // Undefined if empty
    n3.storyLine = "" + storyBook[storyCounter][storyCounter + 2].storyLine3 // Undefined if empty
    n4.storyLine = "" + storyBook[storyCounter][storyCounter + 3].storyLine4 // Undefined if empty
    defaultCenter = centerStories[storyCounter];
  }

  res.render('index', {
    storyLine0: n1.storyLine,
    storyLine1: n2.storyLine,
    storyLine2: n3.storyLine,
    storyLine3: n4.storyLine,
    centerStory: defaultCenter,
    title: title
  });
  counter = counter + 1;

});



module.exports = router