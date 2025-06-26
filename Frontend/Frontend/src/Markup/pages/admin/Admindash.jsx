import React from 'react'
import Admindashboard from '../../components/AdminDashboard/Admindashboard'
import Addmenu from '../../components/Addemployeform/Addmenu'



const Admindash = () => {
  return (
    <>
      <div>
        <div className="container-fluid admin-pages">
          <div className="row">
            <div className="col-md-3 admin-left-side">
              <Addmenu />
            </div>
            <div className="col-md-9 admin-right-side">
              <Admindashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admindash