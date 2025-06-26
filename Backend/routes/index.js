const express=require('express')
//call the router method from express to create the router
const router = express.Router()
const installRouter = require('./install-routes')

const employeeRoute = require('./employee-routes')
const loginRoute = require('./login-routes')
// Add the install router to the main router 
// Add the customer router
const customerRoute=require('./customer-routes')
router.use(installRouter)
// Add the employee routes to the main router
router.use(employeeRoute)
// Add the login router to the main router
router.use(loginRoute)
// Add the customer router
router.use(customerRoute)

module.exports = router