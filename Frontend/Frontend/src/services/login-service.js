const api_url = "http://localhost:5000/api/employee/login";
// Function to send the login request to the server 
const logIn = async (formData)=>{
  const requestOptions={
     method:"POST",
     headers:{
      'Content-Type': 'application/json',    
     },
    body:JSON.stringify(formData)      
  };
  
  // console.log(requestOptions.body)
  const response = await fetch(api_url,requestOptions) 
  return response       
}
// A function to log out the user 
const logOut = ()=>{
   localStorage.removeItem("employee"); 
  }



  const loginService={
       logIn,
       logOut   
  }
  export default loginService