const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const searchRouter = require('./routes/search');
const listHomestayRouter = require('./routes/listHomestay');
const detailHomestayRouter = require('./routes/detailHomestay');
const adminRouter = require('./routes/admin');

const app = express();

// set up mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/travelbooking');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/views')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/listHomestay', listHomestayRouter);
app.use('/detailHomestay', detailHomestayRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
