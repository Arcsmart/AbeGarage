const express=require('express')
// Call the router method from express to create the router 
const router = express.Router()
// import authMiddleware
const authMiddleware = require("../middleWares/auth.middleware")
const employeeController = require('../controllers/employee-controller')

// Create a route to handle the add employee request on post
router.post('/api/employee',[authMiddleware.verifyToken,authMiddleware.isAdmin],employeeController.createEmployee)

router.get("/api/employees", employeeController.getAllEmployees
);

module.exports = router
