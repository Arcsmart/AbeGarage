
const employeeService = require('../services/employee-service')
//create add employee controller
async function createEmployee(req,res,next){
   //console.log(req.headers)  

    //check if employee email already exist in the database 
    const employeeExists = await employeeService.checkIfEmployeeExists(
      req.body.employee_email
    );

    // if employee exists send a response to the client
    if(employeeExists){

     return res.status(400).json({error:"This email address is already associated with another employee!"})    
    }else{
      try {
        const employeeData = req.body;
        //create the employee
        const employee = await employeeService.createEmployee(employeeData);
        if (!employee) {
          res.status(400).json({
            error: "Faild to add employee!",
          });
        } else {
          res.status(200).json({
            status: "true",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({
          error: "somthing went wrong!",
        });
      }
    }    
 }

 // Create the getAllEmployee controller
 async function getAllEmployees(req,res,next){
  // Call the getAllEmployee method from the employe-service
  const employees = await employeeService.getAllEmployees()
  console.log(employees)
  if(!employees){
    res.status(400).json({
      error:"Faild to get all employee"
    })
  }else{
    res.status(200).json({
      status:"success",
      data:employees
    })
  }
 }
module.exports={
  createEmployee,
  getAllEmployees
}