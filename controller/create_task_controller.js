module.exports.createTask = (req,res)=>{    
    const tasks = require('../models/task.js');

    tasks.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, (err, newContact)=>{
        if(err){
            console.log("error", err);
            return;
        }
        console.log(newContact);
        return res.redirect("back");
    });
}