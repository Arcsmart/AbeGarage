// Import the neccesray components
import React from 'react'
import {useState,useEffect} from 'react'
import {Table,Button, InputGroup,Form,Container} from 'react-bootstrap'
// import the date-fans library
import {format} from 'date-fns'
// import the getAllcustomers function
import customerService from '../../../services/customer-service'
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";


const CustomersList = () => {

// create all the states we need to store the data
// Create the customers state to store customers data
const [customers,setCustomers]  =useState([])
// A state to serve as a flag to show the error message
const [apiError,setApiError] = useState(false)
// A state to store the error message 
const [apiErrorMessage,setApiErrorMessage] = useState(null)
 // create for search
 const [search,setSearch]=useState('')
useEffect(()=>{
// call the getAllCustomer
const allCustomers = customerService.getAllCustomers() 
  console.log(allCustomers)
allCustomers.then((res)=>{
if(!res.ok){
          console.log(res.status) 
          setApiError(true)  
          if (res.status === 401) {
          setApiErrorMessage("Please login again");
          } else if (res.status === 403) {
          setApiErrorMessage("You are not authorized to view this page");
          } else {
          setApiErrorMessage("Please try again later");
          }     
}
return res.json()
}).then((data)=>{
if(data.data.length!==0){
          setCustomers(data.data)       
}
}).catch((error)=>{
  console.log("error",error)
})    
},[])

return (
  <>
    {apiError ? (
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>{apiErrorMessage}</h2>
          </div>
        </div>
      </section>
    ) : (
      <>
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>Customers</h2>
            </div>
            <Form>
              <InputGroup className="my-3">
                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for First name Last Name Eamil"
                />
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                  }}
                >
                  <CiSearch />
                </div>
              </InputGroup>
            </Form>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Added Date</th>
                  <th>Active</th>
                  <th>Edit</th>
                </tr>
              </thead>
              {customers
                .filter((customer) => {
                  return (
                    search.toLowerCase() == ""
                      ? customer
                      : customer.customer_first_name,
                    customer.customer_last_name,
                    customer.customer_email.toLowerCase().includes(search)
                  );
                })
                .map((customer) => (
                  <tr key={customer.customer_id}>
                    <td>{customer.customer_id}</td>
                    <td>{customer.customer_first_name}</td>
                    <td>{customer.customer_last_name}</td>
                    <td>{customer.customer_email}</td>
                    <td>{customer.customer_phone_number}</td>
                    <td>
                      {format(
                        new Date(customer.customer_added_date),
                        "MM-dd-yyyy|kk:mm"
                      )}
                    </td>
                    <td>{customer.active_customer_status? 'YES':"NO"}</td>
                    <th>
                      <FaRegEdit style={{ marginRight: "15px" }} />

                      <LuSquareArrowOutUpRight />
                    </th>
                  </tr>
                ))}
            </Table>
          </div>
        </section>
      </>
    )}
  </>
);
}

export default CustomersList