/* src/components/WhyUs.js*/
import React from 'react';
import './WhyUs.css';
import logo1 from './icons8-clock-64.png';
import logo2 from './icons8-craft-64.png';
import logo3 from './icons8-planner-64.png';
import logo4 from './icons8-anime-emoji-50 .png';
import logo5 from './icons8-ophthalmology-64.png';
import logo6 from './icons8-budget-50.png';
import logo7 from './icons8-workflow-64.png';
const WhyUs = () => {
  return (
    <div className="why-us">
      <h2>WHY US</h2>
      <hr />
      <div className="why-us-points">
        <div className="point">
          <img src={logo1} alt="Point 1" className="logo1" />
          <p><h3>On-Time Delivery</h3>We prioritize deadlines,
ensuring your project is
completed promptly.
</p>
        </div>
        <div className="point">
          <img src={logo2} alt="Point 2" className="logo2"/>
          <p><h3>Quality Craftsmanship</h3>We use premium materials
and skilled craftsmanship for
superior results.</p>
        </div>
        <div className="point">
          <img src={logo3} alt="Point 3" className="logo3"/>
          <p><h3>Personalized Approach</h3>Tailoring our services to your
unique vision ensures a
customized experience.</p>
        </div>
        <div className="point">
          <img src={logo4} alt="Point 4" className="logo4" />
          <p><h3>Client Satisfaction</h3>Your happiness is our goal,
delivering results that exceed
expectations.</p>
        </div>
      </div>
      <div className="why-us-points-below">
        <div className="point">
          <img src={logo5} alt="Point 5" className="24" />
          <p><h3>Transparency</h3>Clear communication and
honesty guide our process
from start to finish.</p>
        </div>
        <div className="point">
          <img src={logo6} alt="Point 6" className="logo6" />
          <p><h3>Competitive Prices</h3>We offer fair pricing without
          compromising on quality.</p>
        </div>
        <div className="point">
          <img src={logo7} alt="Point 7" className="logo7" />
          <p><h3>One Stop Solution</h3>From design to project
management, we offer end-to-end solutions for your
interior needs.</p>
        </div>
      </div>
      <div className="button-container">
      <button className="button2">TALK TO AN EXPERT</button>
      </div>
    </div>
  );
};

export default WhyUs;
