const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    helmet = require('helmet'),
    cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
 
app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
