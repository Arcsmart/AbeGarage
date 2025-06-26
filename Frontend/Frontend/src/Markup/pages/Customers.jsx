import React from 'react'
import Addmenu from '../components/Addemployeform/Addmenu'
import CustomersList from '../components/Customers/CustomersList'
const Customers = () => {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <Addmenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <CustomersList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers