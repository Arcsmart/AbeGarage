import React from 'react'
import { useAuth } from '../../context/AuthContext'
import LoginForm from '../components/Loginpage/Login1'
import Addmenu from "../components/Addemployeform/Addmenu"
import EmployeeList from '../components/EmployeeList/EmployeeList'
const Employee = () => {
          const {isLogged,isAdmin} = useAuth()
          if(isLogged){

            if(isAdmin){
          return (
            <div>
              <div className="container-fluid admin-pages">
                <div className="row">
                  <div className="col-md-3 admin-left-side">
                    <Addmenu/>
                  </div>
                  <div className="col-md-9 admin-right-side">
                    <EmployeeList/> 
                  </div>
                </div>
              </div>
            </div>
          );

            } else{
              return <h1>You do not have authorization to access this page</h1>;
            }       
          }else{
             return <div><LoginForm/></div>       
          }
          
 
}

export default Employee