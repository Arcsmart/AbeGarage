import {useState,useEffect} from "react"
// To properly format the data on the table
import {Table,Button} from "react-bootstrap"
// import the date-fns library
import {format} from 'date-fns'
// import the autho hook
import {useAuth} from '../../../context/AuthContext'
// Import the getAllEmployee function 
import employeeService from '../../../services/employee-service'
// create the employeelist component
import React from 'react'

const EmployeeList = () => {
  //Create all the state we need to store the data
  const [employees, setEmployees] = useState([]);
  // A state to serve as a flag to show the error message
  const [apiError, setApiError] = useState(false);
  // To get logged in employee token
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const { employee } = useAuth();
  //To store the token
  let token = null;
  token = employee.employee_token;
  

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        if (!token) {
          setApiError(true);
          setApiErrorMessage("No authentication token found");
          return;
        }

        const response = await employeeService.getAllEmployees(token);
        console.log("API Response:", response); // Debug log

        if (!response.ok) {
          const errorData = await response.json();
          setApiError(true);
          setApiErrorMessage(
            errorData.message || `Request failed with status ${response.status}`
          );
          return;
        }

        const data = await response.json();
        console.log("API Data:", data); // Debug log

        // Handle different response structures
        const employeesData = data.data || data;

        if (employeesData?.length > 0) {
          setEmployees(employeesData);
        } else {
          setApiError(true);
          setApiErrorMessage("No employees found in response");
        }
      } catch (error) {
        setApiError(true);
        setApiErrorMessage("Failed to fetch employees. Please try again.");
        console.error("Fetch error:", error);
      }
    };

    fetchEmployees();
  }, [token]); // Added token to dependency array

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
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>Employees</h2>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Active</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Added Date</th>
                  <th>Role</th>
                  {/* <th>Edit/Delete</th> */}
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.employee_id}>
                    <th>{employee.active_employee ? "Yes" : "No"}</th>
                    <th>{employee.employee_first_name} </th>
                    <th>{employee.employee_last_name}</th>
                    <th>{employee.employee_email}</th>
                    <th>{employee.employee_phone}</th>
                    <th>
                      {format(
                        new Date(employee.added_date),
                        "MM-dd-yyyy|kk:mm"
                      )}
                    </th>
                    <th>{employee.company_role_name}</th>
                    {/* <th>
                       edit 
                       |delete
                    </th> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      )}
    </>
  );
}

export default EmployeeList