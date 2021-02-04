//require the library
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/TodoListdb');

//acquire the connection (to check if it is succesful)
const db = mongoose.connection;

// if error occurs this will get executed
db.on('error', console.error.bind(console, 'error connecting to db'));

// if it the connection is succesfull then this will get executed
db.once('open', ()=>{
    console.log("successfully connected to db")
});