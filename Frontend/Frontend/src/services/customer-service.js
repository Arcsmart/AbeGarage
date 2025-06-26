const api_url = "http://localhost:5000/api/customer";
const api_Curl = "http://localhost:5000/api/customers";

const createCustomer = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  try {
    const response = await fetch(api_url, requestOptions);
    console.log(response)
    if (!response.ok) {
      

      }
    return response;
  } catch (error) {
    throw error;
  }
};
// A function to send get request to get all employees
const getAllCustomers=async()=>{
const requestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    // 'x-access-token':data
  },
};
  const response = await fetch(api_Curl,requestOptions)
  console.log(response)
  return response
}

const customerService = {
  createCustomer,
  getAllCustomers
};

export default customerService;
