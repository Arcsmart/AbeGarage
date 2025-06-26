// import from the env 
// const api_url = process.env.REACT_APP_URL;
const api_url = "http://localhost:5000/api/employee";
const api_Eurl = "http://localhost:5000/api/employees";


//A function to send post requiest to create new employees
const createEmployee = async(FormData,loggedInEmployeeToken)=>{
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'x-access-token':loggedInEmployeeToken,
    },

    body:JSON.stringify(FormData)
    
  };
  
  console.log(requestOptions)
  const response = await fetch(api_url,requestOptions)
  return response
}
// A function to send get request to get all employees
const getAllEmployees = async(token)=>{
  console.log(token)
  const requestOptions={
    method:"GET",

    headers:{
      'Content-Type':"application/json",
      'x-access-token':token
    }
  }
  const response =await fetch(api_Eurl,requestOptions)
  console.log(response)
  return response
}

const employeeService={
  createEmployee,
  getAllEmployees
}
export default employeeService