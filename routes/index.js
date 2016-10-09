var express = require('express')
var router = express.Router()
var partial = require('express-partial')

var app = express();
var request = require('request');
var bodyParser = require('body-parser');

var title = "Trixi Turny - Tech Challenge"

const story = {
  storyLine: "Once upon a time, there was a big bad wolf.",
  nodes: {}
};

function traverse(story, path) {
  const currentNode = path.shift();
  if (path.length === 0) {
    return story.nodes[currentNode];
  } else {
    return traverse(story.nodes[currentNode], path);
  }
}

function editNode(node, storyLine) {
  if (!node) node = {
    storyLine: storyLine,
    nodes: {}
  };
  else node.storyLine = storyLine;

  return node;
}
router.get('/favicon.ico', function(req, res) {
  res.send('');
});

/* GET home page. */ // /1/2/3
router.get('*', function(req, res, next) {
  const path = req.url.split('/').filter(function(value) {
    return value !== ""
  });
  const currentNode = path.length ? traverse(story, path) : story;
  res.render('index', {
    title: title,
    endpoint: req.url.replace(/\/$/, ''),
    currentNode: currentNode
  });
});

router.post('*', function(req, res) {
  var noOfTextFields = 4;

  const path = req.url.split('/').filter(function(value) {
    return value !== ""
  });
  const currentNode = path.length ? traverse(story, path) : story;
  for (var i = 0; i < noOfTextFields; i++) {
    if (req.body["" + i] !== undefined) {
      currentNode.nodes[i] = editNode(currentNode.nodes[i], req.body["" + i]);
    }
  }
  res.render('index', {
    title: title,
    endpoint: req.url.replace(/\/$/, ''),
    currentNode: currentNode
  });

});


module.exports = router