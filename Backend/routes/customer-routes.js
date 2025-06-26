 const express=require('express')
 // call the router method from express to create the router
 const router =express.Router()
 const authMiddleware=require('../middleWares/auth.middleware')
 const customerController =require('../controllers/customer-controller')
 // create a route to handle the add customer request on post
 router.post('/api/customer',customerController.createCustomer)
 // create a route to handle the get customers
 router.get('/api/customers',customerController.getAllCustomers)
 module.exports = router