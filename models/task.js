const mongoose = require('mongoose');

//creating schema
const taskSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }

});

const Tasks = mongoose.model('tasks', taskSchema);

//exporting
module.exports = Tasks;