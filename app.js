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

<<<<<<< HEAD
mongoose.connect(process.env.DB_URI || 'mongodb://localhost:27017/cadastro', {
    useNewUrlParser: true, useUnifiedTopology: true
=======
/*mongoose.connect(process.env.DB_URI || 'mongodb://localhost:27017/cadastro', {
    useNewUrlParser: true
>>>>>>> e8c40be61258e9994086cf449e4f70d2f0de2f2d
}); 
*/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);

module.exports = app;