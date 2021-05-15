var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');

var app = express();
var router = express.Router();
const mongoose = require('mongoose');

const db_url = process.env.DB_URL || "mongodb://localhost:27017/testingdevops";

console.log("DB URL", db_url);


mongoose.connect(db_url, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("mongodb error")
    console.log(err)
  })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require('cors')());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function (req, res, next) {
//   const prefix = process.env.API_ROUTE_PREFIX || '';

//   if (req.originalUrl.indexOf('/api/') != -1) {
//     console.log("aborting");
//     next();
//   } else {
//     const redirectTo = req.protocol + '://' + req.headers.host + prefix + req.originalUrl;
//     console.log("new URL is ", redirectTo);
//     req.url = redirectTo;
//     next();
//   }
// });

const prefix = process.env.API_ROUTE_PREFIX || "/api/v1"
app.use( prefix, router);

router.use('/', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;