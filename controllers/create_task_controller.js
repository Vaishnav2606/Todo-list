module.exports.createTask = (req,res)=>{    
    //getting tasks schema from models
    const Tasks = require('../models/task.js');

    //creating a task
    Tasks.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, (err, newContact)=>{
        //checking if there is an error or not
        if(err){
            console.log("error", err);
            return;
        }
        //redirecting to home page
        return res.redirect("back");
    });
}