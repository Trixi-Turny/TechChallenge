var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var routes = require('./routes/');
var app = express();



// view engine setup
app.engine('.hbs', expressHbs({
  defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/layouts/',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// var hbs = expressHbs.create({
//   // Specify helpers which are only registered on this instance.
//   helpers: {
//     fieldset: function(context, options) {
//       console.log("context:" + context);
//       console.log("options: " + options);
//       console.log("this: " + this);
//       var ret = "<th>";

//       for (var i = 0, j = context.length; i < j; i++) {
//         ret = ret + "<form>" + options.fn(context[i]) + "</form>";
//       }
//       return ret + "</th>";
//     }
//   }
// });

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(3000);