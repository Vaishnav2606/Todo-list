//including the the express js
const express = require("express");

//setting up the router
const router = express.Router();

//getting the home controller
var home_controller =  require("../controllers/home_controller");

//setting the routes
router.get('/', home_controller.home);
router.use('/create-task', require('./create-task'));
router.use('/delete-task', require('./delete-task'));

//exporting
module.exports = router;