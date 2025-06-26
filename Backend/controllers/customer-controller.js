// import service 
const customerService=require('../services/customer-service')
// Create add customer controller
async function createCustomer(req,res,next){
   // check if customer email already exist in the database
   const customerExists = await customerService.checkIfCustmersExists(req.body.customer_email)
   
   if(customerExists){
      return res.status(400).json({
          error:"This email address is aready associated with another customer"
      })  
        
   }else{
        try {
          
          const customerData = req.body
          // create customer
          const customer = await customerService.createCustomer(customerData)
          if(!customer){
           return res.status(400).json({
                    error:"Faild to add customer"
            })        
          }else{
            return res.status(200).json({
                status:"true"    
            })        
          }
        } catch (error) {
          console.log(error)
          return res.status(500).json({
              error:'somthing went wrong!'      
          })
        }  
   }

}
// Create the getAllcustomer controller
async function getAllCustomers(req,res,next){
  // call the getAllCustomer method from service 
  const customers = await customerService.getAllCustomer()
  // console.log(customers)
  if(!customers){
    res.status(400).json({
      error:"Faild to get all customer"
    })
  }else{
    res.status(200).json({
      status:"success",
      data:customers
    })
  }
}
module.exports={
    createCustomer,
    getAllCustomers
}