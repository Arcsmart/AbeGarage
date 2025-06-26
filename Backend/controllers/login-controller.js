// import the login service 
const loginService = require('../services/login-service')
const jwt = require("jsonwebtoken")
// import secret key from environment variables
const jwtSecret = process.env.JWT_SECRET;

// Handle employee login
async function logIn(req,res,next){
      try {
          console.log(req.body)
          const employeeData = req.body
             const employee = await loginService.logIn(employeeData);
             // if the employee is not found
             if (employee.status === "fail") {
               res.status(403).json({
                 status: employee.status,
                 message: employee.message,
               });
               console.log(employee.meassage);
             }
             // If successful ,send a response to the client
              const payload = {
                employee_id: employee.data.employee_id,
                employee_email: employee.data.employee_email,
                employee_role: employee.data.company_role_id,
                employee_first_name: employee.data.employee_first_name,
              };
              const token = jwt.sign(payload,jwtSecret,{expiresIn:'24h'})
              console.log(token)
              const sendBack={
                 employee_token:token,   
              };
              res.status(200).json({
                 status:'success',
                 message:"Employee logged in successfuly",
                 data:sendBack   
              })

             
      } catch (error) {
          console.error(error)
     

      }    
}
module.exports={
          logIn
}