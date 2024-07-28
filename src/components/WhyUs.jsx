// src/components/WhyUs.js
import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <div className="why-us">
      <h2>WHY US</h2>
      <hr />
      <div className="why-us-points">
        <div className="point">
          <img src="path-to-your-image" alt="Point 1" />
          <p><h3>On-Time Delivery</h3>We prioritize deadlines,
ensuring your project is
completed promptly.
</p>
        </div>
        <div className="point">
          <img src="path-to-your-image" alt="Point 2" />
          <p><h3>Quality Craftsmanship</h3>We use premium materials
and skilled craftsmanship for
superior results.</p>
        </div>
        <div className="point">
          <img src="path-to-your-image" alt="Point 3" />
          <p><h3>Personalized Approach</h3>Tailoring our services to your
unique vision ensures a
customized experience.</p>
        </div>
        <div className="point">
          <img src="path-to-your-image" alt="Point 4" />
          <p><h3>Client Satisfaction</h3>Your happiness is our goal,
delivering results that exceed
expectations.</p>
        </div>
      </div>
      <div className="why-us-points-below">
        <div className="point">
          <img src="path-to-your-image" alt="Point 5" />
          <p><h3>Transparency</h3>Clear communication and
honesty guide our process
from start to finish.</p>
        </div>
        <div className="point">
          <img src="path-to-your-image" alt="Point 6" />
          <p><h3>Competitive Prices</h3>We offer fair pricing without
          compromising on quality.</p>
        </div>
        <div className="point">
          <img src="path-to-your-image" alt="Point 7" />
          <p><h3>One Stop Solution</h3>From design to project
management, we offer end-to-end solutions for your
interior needs.</p>
        </div>
      </div>
      <button className="button2">TALK TO AN EXPERT</button>
    </div>
  );
};

export default WhyUs;
