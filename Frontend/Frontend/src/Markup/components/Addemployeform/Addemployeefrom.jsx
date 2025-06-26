import React, { useState } from 'react'
import employeeService from '../../../../src/services/employee-service'
import {useAuth} from '../../../context/AuthContext'
const Addemployeefrom = () => {

    const [employee_email,setEmail]= useState('');
    const [employee_first_name,setFirstname]=useState('');
    const [employee_last_name, setLastName] = useState('');
    const [employee_phone, setPhoneNumber] = useState('');
    const [employee_password, setPassword] = useState('');
    const [active_employee, setActive_employee] = useState(1);
    const [company_role_id, setCompany_role_id] = useState(1);
    // error
     const [emailError, setEmailError] = useState('');
     const [firstNameRequired, setFirstNameRequired] = useState('');
     const [passwordError, setPasswordError] = useState('');
     const [success, setSuccess] = useState(false);
     const [serverError, setServerError] = useState('');
     // create variable to hold the user's token
     let loggedInEmployeeToken =''
     // Destructure the auth hook and get the token
     const {employee} = useAuth()
     if(employee && employee.employee_token){
      loggedInEmployeeToken = employee.employee_token
     }

     const handleSubmit=(e)=>{
      e.preventDefault()
      // Handle client side validations
      let valid =true;// falg
      // First required
        if(!employee_first_name){
          setFirstNameRequired('First name is required')
          valid=false;
        }else{
          setFirstNameRequired('')
        }
        // Email required
        if(!employee_email){
          setEmailError('Email required')
          valid = false
        }else if(!employee_email.includes('@')){
          setEmailError("Invalid email format")
        }else{
          const regex = /^\S+@\S+\.\S+$/;
          if(!regex.test(employee_email)){
           setEmailError ('Invalid email format')
            valid = false
          }else{
           
            setEmailError('')

          }
        }
        // password has be at least 6 characters long 
        if(!employee_password||employee_password.length < 6){
          setPasswordError('password must be at least 6 characters long ')
          valid=false
        }else{
          setPasswordError('')
        }
        // If the from is not valid ,do not submit
        if(!valid){
          return
        }
        const formData={
          employee_email,
          employee_first_name,
          employee_last_name,
          employee_password,
          employee_phone,
          active_employee,
          company_role_id
        };
        // pass the data to the service
        const newEmployee = employeeService.createEmployee(formData,loggedInEmployeeToken)
        newEmployee
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              setServerError(data.error);
            } else {
              // Handle successful response
              setSuccess(true)
              setServerError("")
              // Redirect to the employees page after 2 seconds
              // For now ,just redirect to the home page
              setTimeout(() => {
                // windows .loction .href='/admin/employees'
                window.location.href = "/";
              }, 1000);
            }
          })
          .catch((error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setServerError(resMessage);
          });
       }
  return (
    <div>
      <section className = "contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Add a new employee</h2>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-7">
              <div className="inner-column">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row clearfix">
                      <div className="form-group col-md-12">
                        {serverError && (
                          <div className="validation-error" role="alert">
                            {serverError}
                          </div>
                        )}
                        <input
                          type="email"
                          name="employee_email"
                          value={employee_email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Employee email"
                        />
                        {emailError && (
                          <div className="validation-error" role="alert">
                            {emailError}
                          </div>
                        )}
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="employee_first_name"
                          value={employee_first_name}
                          onChange={(e) => setFirstname(e.target.value)}
                          placeholder="Employee first name"
                        />
                        {firstNameRequired && (
                          <div className="validation-error" role="alert">
                            {firstNameRequired}
                          </div>
                        )}
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          type ="text"
                          name ="employee_last_name"
                          value = {employee_last_name}
                          onChange = {(e) => setLastName(e.target.value)}
                          placeholder = "Employee last name"
                          required
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="employee_phone"
                          value={employee_phone}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Employee phone (555-555-5555)"
                          required
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <select
                          name="employee_role"
                          value={company_role_id}
                          onChange={(e) => setCompany_role_id(e.target.value)}
                          className="custom-select-box"
                        >
                          <option value="1">Employee</option>
                          <option value="2">Manager</option>
                          <option value="3">Admin</option>
                        </select>
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          type="password"
                          name="employee_password"
                          value={employee_password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Employee password"
                        />
                        {passwordError && (
                          <div className="validation-error" role="alert">
                            {passwordError}
                          </div>
                        )}
                      </div>

                      <div className="form-group col-md-12">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span>Add employee</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Addemployeefrom