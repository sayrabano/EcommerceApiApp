
//require library
const express = require('express')
const app = express();
const port = process.env.port ||8000;
const db = require('./config/mongoose')
const bodyParser = require('body-parser')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    next();
  });
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/products',require('./routes/product'))

app.listen(port,(err)=>{
    if(err){console.log('Something is wrong on Port ${port}')}
    console.log(`Server is running on port ${port}`)

})
