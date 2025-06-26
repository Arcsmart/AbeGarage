
import React from 'react'
import {useState} from 'react'
import customerService from '../../../services/customer-service';

const Addcustomer = () => {

    const [customer_email, setEmail] = useState("");
    const [customer_first_name, setFirstname] = useState("");
    const [customer_last_name, setLastName] = useState("");
    const [customer_phone_number, setPhoneNumber] = useState("");

    // error
    const [emailError, setEmailError] = useState("");
    const [firstNameRequired, setFirstNameRequired] = useState("");
    const [serverError, setServerError] = useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle client side validations
      let valid = true; // falg
      // First required
      if (!customer_first_name) {
        setFirstNameRequired("First name is required");
        valid = false;
      } else {
        setFirstNameRequired("");
      }
      // Email required
      if (!customer_email) {
        setEmailError("Email required");
        valid = false;
      } else if (!customer_email.includes("@")) {
        setEmailError("Invalid email format");
      } else {
        const regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(customer_email)) {
          setEmailError("Invalid email format");
          valid = false;
        } else {
          setEmailError("");
        }
      }
     
      // If the from is not valid ,do not submit
      if (!valid) {
        return;
      }
      const formData = {
        customer_email,
        customer_first_name,
        customer_last_name,
        customer_phone_number,

      };
      // pass the data to the service
        const newCustomer = customerService.createCustomer(formData);

      newCustomer.then((response) => response.json())
        .then((data) => {
          console.log(data)
          if (data.error) {
            setServerError(data.error);
          } else {
            // Handle successful response

            setServerError("");
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
    };

  return (
    <>
      <div>
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>Add a new customer</h2>
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
                            name="customer_email"
                            value={customer_email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Customer email"
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
                            name="customer_first_name"
                            value={customer_first_name}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder="Customer first name"
                          />
                          {firstNameRequired && (
                            <div className="validation-error" role="alert">
                              {firstNameRequired}
                            </div>
                          )}
                        </div>

                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            name="customer_last_name"
                            value={customer_last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="customer last name"
                            required
                          />
                        </div>

                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            name="customer_phone"
                            value={customer_phone_number}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Customer phone (555-555-5555)"
                            required
                          />
                        </div>

                        <div className="form-group col-md-12">
                          <button
                            className="theme-btn btn-style-one"
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            <span>Add customer</span>
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
    </>
  );
}

export default Addcustomer
