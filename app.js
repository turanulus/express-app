const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routers
const postRouter = require('./routes/posts'); 
app.use('/', postRouter); 

//start database connection
const dbConnection = require('./database/database')
dbConnection();

module.exports = app;