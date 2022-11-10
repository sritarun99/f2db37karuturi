var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config(); 
const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true}); 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var IndiaRouter = require('./routes/India');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var India = require("./models/india"); 
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/India', IndiaRouter);
app.use('/selector', selectorRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/resource', resourceRouter);


//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connectionerror:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// We can seed the collection if needed on server start 
async function recreateDB(){ 
  // Delete everything 
  await India.deleteMany(); 
 
  let instance1 = new 
  India({State1:"Andhra",  Region: 1, State2:"Delhi"}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  let instance2 = new 
  India({State1:"Karnataka",  Region: 2, State2:"Goa"}); 
    instance2.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("Second object saved") 
    }); 
    let instance3 = new 
    India({State1:"Haryana",  Region: 3, State2:"Sikkim"}); 
      instance3.save( function(err,doc) { 
          if(err) return console.error(err); 
          console.log("Third object saved") 
      }); 
} 
 
let reseed = true; 
if (reseed) { recreateDB();} 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
