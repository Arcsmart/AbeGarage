import Addmenu from "../../components/Addemployeform/Addmenu";
import React from 'react'
import Addcustomer from "../../components/Addcustomer/Addcustomer";

const Addcustomers = () => {
  return (
    <>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <Addmenu />
          </div>
          <div className="col-md-9 admin-right-side">
           <Addcustomer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Addcustomers