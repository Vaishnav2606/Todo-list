module.exports.home = (req,res)=>{
    //getting tasks from database
    let Tasks = require('../models/task')

    //sending the tasks in the ejs
    Tasks.find({}, (err, tasks)=>{
        //error checking
        if(err){console.log("Error:", err); return;}
        return res.render('home', {
           tasks: tasks 
        });

    });

}