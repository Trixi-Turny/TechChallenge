var express = require('express')
var router = express.Router()
var partial = require('express-partial')
var app = express();
var request = require('request');

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

router.get('/favicon.ico', function() {
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
  const path = req.url.split('/').filter(function(value) {
    return value !== ""
  });
  const currentNode = path.length ? traverse(story, path) : story;

  if (req.body.textarea0) {
    currentNode.nodes[0] = editNode(currentNode.nodes[0], req.body.textarea0);
  } else if (req.body.textarea1) {
    currentNode.nodes[1] = editNode(currentNode.nodes[1], req.body.textarea1);
  } else if (req.body.textarea2) {
    currentNode.nodes[2] = editNode(currentNode.nodes[2], req.body.textarea2);
  } else if (req.body.textarea3) {
    currentNode.nodes[3] = editNode(currentNode.nodes[3], req.body.textarea3);
  }
  res.render('index', {
    title: title,
    endpoint: req.url.replace(/\/$/, ''),
    currentNode: currentNode
  });
});


module.exports = router