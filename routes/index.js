var express = require('express')
var router = express.Router()
var partial = require('express-partial')
var app = express();
var request = require('request')
var Node = require("tree-node")
var index = 0;
var stories = [];
var storyBook = {};
var storyStarter = "Once upon a time, there was a big bad wolf."
var defaultCenter = storyStarter
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
      centerStory: storyStarter
        // storyLine: defaultContent
    });
  })
  /* POST */
router.post('/', function(req, res, next) {
  for (var i = 0; i < Node.length; i++) {

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
    console.log(root.layer(n1.id));
    res.render('index', {
      storyLine0: n1.storyLine,
      storyLine1: n2.storyLine,
      storyLine2: n3.storyLine,
      storyLine3: n4.storyLine,
      centerStory: defaultCenter
    })
  }
  console.log(stories);
});


var counter = 0;
router.get('/:id', function(req, res, next) {
  storyBook[counter] = stories;

  var index = req.params.id;
  if (index == 0) {
    // root.up(n1.index);
    defaultCenter = n1.storyLine;
  } else if (index == 1) {
    defaultCenter = n2.storyLine;
    // root.up(n2.index);
  } else if (index == 2) {
    defaultCenter = n3.storyLine;
    // root.up(n3.index)
  } else if (index == 3) {
    defaultCenter = n4.storyLine;
    // root.up(n4.index)
  } else if (index == "start") {
    for (var n = 0; n < storyBook.length; n++) {
      var idx = n.toString();
      n1.storyLine = storyBook[0].storyLine1;
    }
    res.render('index', {
      storyLine0: stories[0].storyLine1
    });

  }
  counter = counter + 1;
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
  console.log(storyBook);

});



module.exports = router