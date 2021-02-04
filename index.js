const express = require('express');
const port = 8000;

//getting the database
var db = require('./config/mongoose');
//including the tasks schema
const tasks = require('./models/task.js');

const app = express();
app.use(express.urlencoded());

//Using the express Router
app.use('/', require('./routes'))

//set up the view engine
app.set("view engine", 'ejs');
app.set("views", './views');

//middleware
app.use(express.static('./assets'))



app.listen(port, (err)=>{
    if(err){
        console.log("error has occured:",err);
        return;
    }
    console.log("Server is running on port:", port);
    return;
});