// const conn = require('../config/dbconfig')
const bcrypt = require("bcrypt")
// import employee Service to get email and password of employee of company
const employeeService = require('./employee-service')
// Handle employee login
async function logIn(employeeData) {
  try {
    let returnData = {}; // object to be returned
    const employee = await employeeService.getEmployeeByEmail(
      employeeData.employee_email
    );
    console.log(employee);
    if (employee.length === 0) {
      returnData = {
        status: "fail",
        message: "Employee does not exist ",
      };
      return returnData;
    }
    const passwordMatch = await bcrypt.compare(
      employeeData.employee_password,
      employee[0].employee_password_hashed
    );
    console.log(passwordMatch)
    if (!passwordMatch) {
      returnData = {
        status: "fail",
        message: "Incorrect password",
      };
      return returnData;
    }
    returnData = {
      status: "success",
      data: employee[0],
    };
    return returnData;
  } catch (error) {
    console.error(error);
  }
}
module.exports={
 logIn
}