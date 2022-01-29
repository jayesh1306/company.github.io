var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


var indexRouter = require('./routes/index');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

mongoose.connect('mongodb://localhost:27017/todolist', (err, result) =>{
  if(err) console.log(err);
  else console.log("Connected DB")
})


app.listen(3000, () =>{
  console.log("Listening on 3000");
})