import React from 'react'
import Addemployeefrom from '../components/Addemployeform/Addemployeefrom';
import Addmenu from '../components/Addemployeform/Addmenu';

const AddEmploye = () => {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className='row'>
          <div className='col-md-3 admin-left-side'>
            <Addmenu />
          </div>
          <div className='col-md-9 admin-right-side'>
            <Addemployeefrom />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmploye