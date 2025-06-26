//import the dotenv package 
require("dotenv").config();
// import the jsonwebtoken packege
const jwt = require("jsonwebtoken");
// A function to verfiy the token recived from the frontend 
// import the employee service 
const employeeService = require('../services/employee-service')
//  A function to verfiy the token recived from the frontend
const verifyToken = async (req ,res ,next)=>{
  let token = req.headers["x-access-token"];
  console.log(token)
  if(!token){
   return res.status(403).send({
          status:'fail',
          message:"No token provided"
   })       
  } 
  jwt.verify(token, process.env.JWT_SECRET,(err,decoded)=>{
    if(err){
      return res.status(400).send({
          status:"fail",
          message:"Unauthorized"
      })    
    } 
    console.log(decoded)   
    req.employee_email = decoded.employee_email 
    next();
  });       
}

const isAdmin = async (req, res, next) => {
  // let token = req.headers["x-access-token"];
  console.log(req.employee_email);
  const employee_email = req.employee_email;
  const employee = await employeeService.getEmployeeByEmail(employee_email);
  if (employee[0].company_role_id === 3) {
    next();
  } else {
    return res.status(403).send({
      status: "fail",
      error: "Not an Admin!"
    });
  }
}


const authMiddleware={
          verifyToken,
          isAdmin
}
module.exports = authMiddleware