const express = require('express');
const port = 8000;

//getting the database
var db = require('./config/mongoose');
//including the tasks schema
const Tasks = require('./models/task.js');

//creating the server
const app = express();

//middleware
app.use(express.urlencoded());

//Using the express Router
app.use('/', require('./routes'))

//set up the view engine
app.set("view engine", 'ejs');
app.set("views", './views');

//middleware
app.use(express.static('./assets'))


//setting up the server
app.listen(port, (err)=>{
    if(err){
        console.log("error has occured:",err);
        return;
    }
    console.log("Server is running on port:", port);
    return;
});