const express = require('express');

//creating the router
const router = express.Router();

//getting the delete task controller
var delete_task_controller = require('../controllers/delete_task_controller');

//setting the controller to the right path
router.get('/', delete_task_controller.deleteTask);

//exporting
module.exports = router;