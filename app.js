const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    helmet = require('helmet'),
    cors = require('cors'),
    mongoose = require('mongoose');


const indexRouter = require('./routes/index');
const signupRouter = require('./routes/signup');
const cadastroRouter = require('./routes/cadastro');

 
app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/', signupRouter);
app.use('/', cadastroRouter);


module.exports = app;