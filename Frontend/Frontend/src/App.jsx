
import {Routes,Route} from 'react-router'
import Home from './Markup/pages/Home'
import Login from './Markup/pages/Login'
import AddEmploye from './Markup/pages/AddEmploye'
import PrivateAuthRoute from './Markup/components/Auth/PrivateAuthRoute'
import Customers from './Markup/pages/Customers'
import Employee from './Markup/pages/Employee'
import Orders from './Markup/pages/Orders'
import Unauthorized from './Markup/pages/Unauthorized'
import About from './Markup/pages/About'
import Services from './Markup/pages/Services'
import Addcustomer from './Markup/pages/admin/Addcustomers'
import Admindash from './Markup/pages/admin/Admindash'
import './assets/costomTemplete/css/bootstrap.css'
import './assets/costomTemplete/css/style.css'
import './assets/costomTemplete/css/responsive.css'
import './assets/costomTemplete/css/color.css'
// custom css
import './assets/styles/custom.css'
import Header from './Markup/components/Header/Header'
import Footer from './Markup/components/Footer/Footer'
// import './App.css'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin" element={<Admindash />} />

        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          }
        />

        <Route
          path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/add-customer"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Addcustomer />
            </PrivateAuthRoute>
          }
        />

        <Route path="/admin/employees" element={<Employee />} />

        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmploye />
            </PrivateAuthRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App
