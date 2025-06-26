import React from 'react'
import {Link} from 'react-router'
import Bannerimage from '../../assets/costomTemplete/images/custom/banner/banner1.jpg'

import vban1 from '../../assets/costomTemplete/images/custom/misc/vban1.jpg'
import vban2 from '../../assets/costomTemplete/images/custom/misc/vban2.jpg'
import Engine from "../../assets/costomTemplete/images/custom/misc/image0_0.jpg";
import counter from "../../assets/costomTemplete/images/custom/misc/image3.jpg";
import tyre from "../../assets/costomTemplete/images/custom/misc/image2.jpg";
const Home = () => {
  return (
    <section>
      <section class="video-section">
        <div
          data-parallax='{"y": 50}'
          class="sec-bg"
          style={{ backgroundImage: `url(${Bannerimage})` }}
        ></div>
        <div class="auto-container">
          <h5>Working since 1999</h5>
          <h2>
            Tuneup Your Car <br /> to Next Level
          </h2>
          <div class="video-box">
            <div class="video-btn">
              <a
                href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                class="overlay-link lightbox-image video-fancybox ripple"
              >
                <i class="flaticon-play"></i>
              </a>
            </div>
            <div class="text">
              Watch intro video <br /> about us
            </div>
          </div>
        </div>
      </section>
      {/* // about section */}
      <section class="about-section">
        <div class="auto-container">
          <div class="row">
            <div class="col-lg-5">
              <div class="image-box">
                <img src={vban1} alt="" />
                <img src={vban2} alt="" />
                <div class="year-experience" data-parallax='{"y": 30}'>
                  <strong>17</strong> years <br />
                  Experience{" "}
                </div>
              </div>
            </div>
            <div class="col-lg-7 pl-lg-5">
              <div class="sec-title">
                <h5>Welcome to Our workshop</h5>
                <h2>We have 24 years experience</h2>
                <div class="text">
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple
                    touchpoints for offshoring.
                  </p>
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway will close the loop
                    on focusing.
                  </p>
                </div>
                <div class="link-btn mt-40">
                  <a
                    href="about.html"
                    class="theme-btn btn-style-one style-two"
                  >
                    <span>
                      About Us <i class="flaticon-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service section */}

      <section class="services-section">
       
        <div class="auto-container">
          <div class="sec-title style-two">
            <h2>Our Featured Services</h2>
            <div class="text">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution.{" "}
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Performance Upgrade</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-power"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Transmission Services</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-gearbox"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Break Repair & Service</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-brake-disc"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Engine Service & Repair</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-car-engine"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Tyre & Wheels</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-tire"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Denting & Painting</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-spray-gun"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features Section --> */}
      <section class="features-section">
        <div class="auto-container">
          <div class="row">
            <div class="col-lg-6">
              <div class="inner-container">
                <h2>
                  Quality Service And <br /> Customer Satisfaction !!
                </h2>
                <div class="text">
                  We utilize the most recent symptomatic gear to ensure your
                  vehicle is fixed or adjusted appropriately and in an opportune
                  manner. We are an individual from Professional Auto Service, a
                  first class execution arrange, where free assistance offices
                  share shared objectives of being world-class car
                  administration focuses.
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="image">
                {/* <img src={counter} alt="" style={{paddingRight:"-4",paddingTop:"0"}} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why choose us */}
      <section class="why-choose-us">
        <div class="auto-container">
          <div class="row">
            <div class="col-lg-6">
              <div class="sec-title style-two">
                <h2>Why Choose Us</h2>
                <div class="text">
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation heading towards.
                </div>
              </div>
              <div class="icon-box">
                <div class="icon">
                  <span class="flaticon-mechanic"></span>
                </div>
                <h4>Certified Expert Mechanics</h4>
              </div>
              <div class="icon-box">
                <div class="icon">
                  <span class="flaticon-wrench"></span>
                </div>
                <h4>Fast And Quality Service</h4>
              </div>
              <div class="icon-box">
                <div class="icon">
                  <span class="flaticon-price-tag-1"></span>
                </div>
                <h4>Best Prices in Town</h4>
              </div>
              <div class="icon-box">
                <div class="icon">
                  <span class="flaticon-trophy"></span>
                </div>
                <h4>Awarded Workshop</h4>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="sec-title style-two">
                <h2>Addtional Services</h2>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <div class="image">
                    <img src={Engine} alt="" style={{height:"400px"}}/>
                  </div>
                </div>
                <div class="col-md-7">
                  <ul class="list">
                    <li>General Auto Repair & Maintenance</li>
                    <li>Transmission Repair & Replacement</li>
                    <li>Tire Repair and Replacement</li>
                    <li>State Emissions Inspection</li>
                    <li>Break Job / Break Services</li>
                    <li>Electrical Diagnostics</li>
                    <li>Fuel System Repairs</li>
                    <li>Starting and Charging Repair</li>
                    <li>Steering and Suspension Work</li>
                    <li>Emission Repair Facility</li>
                    <li>Wheel Alignment</li>
                    <li>Computer Diagaonstic Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Second vedio sectiom */}
      <section class="video-section">
        <div
          data-parallax='{"y": 50}'
          class="sec-bg"
          style={{ backgroundImage: ` url(${tyre})`,fontSize:"400px" , }}
        ></div>
        <div class="auto-container">
          <h5>Working since 1992</h5>
          <h2>
            We are leader <br /> in Car Mechanical Work
          </h2>
          <div class="video-box">
            <div class="video-btn">
              <a
                href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                class="overlay-link lightbox-image video-fancybox ripple"
              >
                <i class="flaticon-play"></i>
              </a>
            </div>
            <div class="text">
              Watch intro video <br /> about us
            </div>
          </div>
        </div>
      </section>
      {/* CTA section */}
      <section class="cta-section">
        <div class="auto-container">
          <div class="wrapper-box">
            <div class="left-column">
              <h3>Schedule Your Appointment Today</h3>
              <div class="text">
                Your Automotive Repair & Maintenance Service Specialist
              </div>
            </div>
            <div class="right-column">
              <div class="phone">1800.456.7890</div>
              <div class="btn">
                <a href="#" class="theme-btn btn-style-one">
                  <span>Appointment</span>
                  <i class="flaticon-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home