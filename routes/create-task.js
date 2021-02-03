const express = require("express")

const router = express.Router();

var create_task_controller =  require("../controller/create_task_controller");

router.post('/', create_task_controller.createTask);

module.exports = router;