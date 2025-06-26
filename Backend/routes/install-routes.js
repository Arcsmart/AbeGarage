const express = require('express')
//call the router method from express to create the router
const router = express.Router()
//import the install controller
const installController = require('../controllers/install-controller')
// create a route to handle the install request on get 
router.get('/install',installController.install)

module.exports = router