var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var express = require("express");
var util = require("util");
var request = require('request');
var app = express();
var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();
var objectArray = {};

app.use(express.static('public'));

var cheerio = require('cheerio');
var $;

app.get('/', function(request, response){

  response.sendFile(__dirname+'/public/index.html');

});app.listen(8080);


// function displayForm(res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {
//       'Content-Type': 'text/html',
//       'Content-Length': data.length
//     });

//     html = data.toString();
//     $ = cheerio.load(html);
//     manipulate($);
//     res.write(data);
//     res.end();
//   });
// }

// function manipulate($) {

//   ee.on("submit", function(req, res) {
//     res.preventDefault();
//     console.log("event has occured");
//     $('textarea').each(function(i, element) {
//       var value = $(this).attr("placeholder");
//       objectArray[i] = value;
//       console.log(objectArray[i]);
//     });
//     $.html();
//   });
//   ee.emit("submit");
// }

// server.listen(8080);
console.log("server listening on 8080");

// function addElements(html) {
//   $ = cheerio.load(html);
//   var element = $("#trixi");
//   console.log($(element).val());
//   $.html()
// }