const express = require("express")

//creatung the router
const router = express.Router();

//getting the create task controller
var create_task_controller =  require("../controllers/create_task_controller");

//setting the controller to correct path
router.post('/', create_task_controller.createTask);

//exporting
module.exports = router;