var http = require('http');
var fs = require('fs');
var express = require("express");
var request = require('request');
var app = express();
var objectArray = {};

app.use(express.static('public'));

var cheerio = require('cheerio');
var $;

app.get('/', function(request, response) {

  response.sendFile(__dirname + '/public/index.html');

});
app.listen(8080);
// server.listen(8080);
console.log("server listening on 8080");

// function addElements(html) {
//   $ = cheerio.load(html);
//   var element = $("#trixi");
//   console.log($(element).val());
//   $.html()
// }