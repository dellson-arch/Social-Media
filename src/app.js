const express = require('express');
const authroutes = require('./routes/auth.routes');
const postroutes = require('./routes/post.routes');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.json()); 
app.use('/api/auth', authroutes);
app.use('/api/post', postroutes);

module.exports = app;