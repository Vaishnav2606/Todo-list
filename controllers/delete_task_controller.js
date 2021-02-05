module.exports.deleteTask = (req,res)=>{
    
    //getting tasks from db
    const Tasks = require('../models/task');

    //getting the id of the task which are supposed to be deleted
    //this will convert the query into an array if the query is only string
    if(typeof(req.query.delete) == 'string'){
        var deleteTask = [req.query.delete];
    }//else will work if more than one task is selected which has to be deleted
    else{
        var deleteTask = req.query.delete;
    }

    //deleting the task
    for(let task of deleteTask){
        Tasks.findByIdAndDelete(task, (err)=>{
            if(err){console.log('error has occured:', err); return;}
            
        })
    }
    //redirecting to home page
    return res.redirect('/');
}