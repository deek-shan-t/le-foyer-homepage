import React from 'react';
import Contact from './Contact';
import Contact_box from './Contact_box';
import Contact_end from './Contact_end';
import Right_top from "./Right_top";
import RightContact_end from './RightContact_end';
import './footerstyle.css';
function Footer() {
  return (
    <footer id='mainBlock'>
        <div className='block1'>
        <Contact />
        <Contact_box />
        <Contact_end />
        </div>
        <div className='block3'>
        
        </div>
        <div className='block2'>
        <Right_top />
        <RightContact_end />
        
        </div>

    </footer>
  );
}

export default Footer;
