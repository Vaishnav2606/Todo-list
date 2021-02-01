const express = require('express');
const port = 8000;

const app = express();

//Using the express Router
app.use('/', require('./routes'))

//set up the view engine
app.set("view engine", 'ejs');
app.set("views", './views');

app.listen(port, (err)=>{
    if(err){
        console.log("error has occured:",err);
        return;
    }
    console.log("Server is running on port:", port);
    return;
});