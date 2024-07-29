import React from 'react';
import logo from '../le-foyer-logo.png';
import './Contactstyle.css';

function Contact() {
  return (
    <div className="contact-container">
      <img src={logo} alt="Company Logo" height="100" />
      <h4 className='footermainheading'>LE FOYER DECOR</h4>
      <p className='footersubheading'>Live Your Dream</p>
    </div>
  );
}

export default Contact;
