/* src/components/OurServices.js*/
import React from 'react';
import './OurServices.css';
import logo from './icons8-view-details-50.png';

const OurServices = () => {
  return (
    <div className="our-services">
      <h2>OUR SERVICES</h2>
      
      <hr/>
      <div className="service-boxes">
        <div className="service-box">
        
          <h3><img src={logo} alt="Service 1" className="service-logo"/>Interior Design Solutions</h3>
          <ul>
            <li>Residential Interior</li>
            <li>Commercial Interior</li>
            <li>Hospitality Interior</li>
            <li>Educational Interior</li>
            <li>Recreational Interior</li>
            <li>and more...</li>
          </ul>
        </div>
        <div className="service-box">
          
          <h3><img src={logo} alt="Service 2" className="service-logo"/>Custom Solutions</h3>
          <ul>
            <li>Turnkey Projects</li>
            <li>Modular Kitchen</li>
            <li>Modular Wardrobe</li>
            <li>Storage solutions</li>
            <li>Customized Furniture</li>
            <li>False Ceiling Design</li>
            <li>Lighting Design</li>
            <li>Flooring Solutions</li>
            <li>Wall Treatments</li>
            <li>and more...</li>
          </ul>
        </div>
        <div className="service-box">
          
          <h3><img src={logo} alt="Service 3" className="service-logo" />Additional Services</h3>
          <ul>
            <li>Project Management</li>
            <li>Site Supervision</li>
            <li>Electrical Services</li>
            <li>Plumbing Services</li>
            <li>Post completion services</li>
            <li>and more...</li>
          </ul>
        </div>
      </div>
      <button className="button1">BOOK FREE VISIT</button>
    </div>
  );
};

export default OurServices;
