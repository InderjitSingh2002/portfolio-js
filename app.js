var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./controllers/index');
var usersRouter = require('./controllers/users');
var nodemailer = require('nodemailer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(express.json());


//Sends email from the contact form
//Using fastmail because other services did not allow SMTP
app.post('/', (req, res) => {
  console.log(req.body);

  //Creating a transponder object using nodemailer to act as an authenticator
  const transponder = nodemailer.createTransport(
    {
      service: 'fastmail',
      auth: {
        user: 'testingportfolio@fastmail.com',
        pass: '3rdyg363nsdmrlyb'
      }
    }
  )

  //Formats the response to view in the email
  const mailOptions = {
    from: req.body.email,
    to: 'testingportfolio@fastmail.com',
    subject: req.body.subject,
    text: req.body.message
  }

  //Transponder function to send the mail
  transponder.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.log(error);
    }
    else {
      console.log("email sent")
    }
  });
})

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
