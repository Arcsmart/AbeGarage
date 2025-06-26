import React from 'react'
import { Link } from 'react-router'
import logo from '../../../assets/costomTemplete/images/custom/logo.png'
import {useAuth} from '../../../context/AuthContext'
import loginService from '../../../services/login-service'
import { Navigate } from 'react-router'


const Header = () => {
    // use the custom hook to access the data in the context
    const {isLogged,setIsLogged,employee} = useAuth();
    // console.log(useAuth()) 
    
      // Log out event handler function
      const logOut = () => {
        // Call the logout function from the login service 
        loginService.logOut();
        // Set the isLogged state to false 
        setIsLogged(false);
      }
    


  return (
    <div>
      {/* <!-- Main Header --> */}
      <header class="main-header header-style-one">
        {/* <!-- Header Top --> */}
        <div class="header-top">
          <div class="auto-container">
            <div class="inner-container">
              <div class="left-column">
                <div class="text">Enjoy the Beso while we fix your car</div>
                <div class="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
              </div>
              <div class="right-column">
                {isLogged ? (
                  <div className="link-btn">
                    <div
                      className="phone-number"
                      style={{ marginRight: "50px" }}
                    >
                      <strong>Welcome : {employee?.employee_first_name}</strong>
                    </div>
                  </div>
                ) : (
                  <div class="phone-number">
                    Schedule Your Appontment Today :
                    <strong>1800 456 7890</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Header Upper --> */}
        <div class="header-upper">
          <div class="auto-container">
            <div class="inner-container">
              {/* <!--Logo--> */}
              <div class="logo-box">
                <div class="logo">
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
              <div class="right-column">
                {/* <!--Nav Box--> */}
                <div class="nav-outer">
                  {/* <!--Mobile Navigation Toggler--> */}
                  <div class="mobile-nav-toggler">
                    <img src="assets/images/icons/icon-bar.png" alt="" />
                  </div>

                  {/* <!-- Main Menu --> */}
                  <nav class="main-menu navbar-expand-md navbar-light">
                    <div
                      class="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul class="navigation">
                        <li class="dropdown">
                          <Link to="/">Home</Link>
                        </li>
                        <li class="dropdown">
                          <Link to="/About"> About Us</Link>
                        </li>
                        <li class="dropdown">
                          <Link to="/services">Services</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/admin">Admin</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div class="search-btn"></div>
                {isLogged ? (
                  <div className="link-btn">
                    <Link
                      to="/"
                      className="theme-btn btn-style-one blue"
                      onClick={logOut}
                    >
                      Log out
                    </Link>
                  </div>
                ) : (
                  <div class="link-btn">
                    <Link to="/login" class="theme-btn btn-style-one">
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Upper--> */}

        {/* <!-- Sticky Header  --> */}
        <div class="sticky-header">
          {/* <!-- Header Upper --> */}
          <div class="header-upper">
            <div class="auto-container">
              <div class="inner-container">
                {/* <!--Logo--> */}
                <div class="logo-box">
                  <div class="logo">
                    <a href="/">
                      <img src="assets/images/custom/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="right-column">
                  {/* <!--Nav Box--> */}
                  <div class="nav-outer">
                    {/* <!--Mobile Navigation Toggler--> */}
                    <div class="mobile-nav-toggler">
                      <img src="assets/images/icons/icon-bar.png" alt="" />
                    </div>

                    {/* <!-- Main Menu --> */}
                    <nav class="main-menu navbar-expand-md navbar-light"></nav>
                  </div>
                  <div class="search-btn"></div>

                  <div class="link-btn">
                    <a href="/login" class="theme-btn btn-style-one">
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Header Upper--> */}
        </div>
        {/* <!-- End Sticky Menu --> */}

        {/* <!-- Mobile Menu  --> */}
        <div class="mobile-menu">
          <div class="menu-backdrop"></div>
          <div class="close-btn">
            <span class="icon flaticon-remove"></span>
          </div>

          <nav class="menu-box">
            <div class="nav-logo">
              <a href="index.html">
                <img src="assets/images/logo-two.png" alt="" title="" />
              </a>
            </div>
            <div class="menu-outer">
              {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            </div>
          </nav>
        </div>
        {/* <!-- End Mobile Menu --> */}

        <div class="nav-overlay">
          <div class="cursor"></div>
          <div class="cursor-follower"></div>
        </div>
      </header>
      {/* <!-- End Main Header --> */}
    </div>
  );
}

export default Header