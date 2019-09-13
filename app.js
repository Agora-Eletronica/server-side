const router = require('express').Router();
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
const cadastroRouter = require('./routes/cadastro');
const CadastroController = require('./controllers/CadastroController');
 
app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*mongoose.connect(process.env.DB_URI || 'mongodb://localhost:27017/cadastro', {
    useNewUrlParser: true, useUnifiedTopology: true
}); */

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);
app.use('/cadastro', cadastroRouter);
app.put('/update/:cadastroId', CadastroController.update);


module.exports = app;