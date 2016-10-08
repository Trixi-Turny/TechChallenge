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