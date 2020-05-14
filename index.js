const morgan = require('morgan');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();



const routers = require('./routers/index');


//setting
app.set('json spaces', 4) //res.json({'joder':1}) show into browser in good formating
//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json()); // send in formato json
app.use(bodyParser.urlencoded({extended:false})) // send throught of url
//routes
app.use('/products',routers);
//static fails

//start server
app.listen(3000,()=>{
    console.log('sever port ',3000)
})