const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    helmet = require('helmet'),
    cors = require('cors'),
    mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const signupRouter = require('./routes/signup');
 
app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*mongoose.connect(process.env.DB_URI || 'mongodb://localhost:27017/cadastro', {
    useNewUrlParser: true
}); 
*/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);

module.exports = app;