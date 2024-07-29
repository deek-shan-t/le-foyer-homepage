import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="top-section">
        <div className="text-content">
          <h2 >About Us :</h2>
          <p>
            Welcome to Le Foyer Decor, where creativity meets functionality in the world of interior design. Established with a passion for transforming spaces, we specialize in crafting bespoke interiors that elevate living and working environments. From residential sanctuaries to commercial hubs, our team of dedicated designers brings years of expertise and a commitment to excellence to every project. At Le Foyer Decor, we believe in creating spaces that not only reflect your style and aspirations, but also enhance your quality of life.
          </p>
        </div>
        <div className="image-container">
          <img src="/1.jpg" alt="Interior Design" />
        </div>
      </div>
      <div className="bottom-section">
        <div className="image-container">
          <img src="/2.jpg" alt="Interior Design" />
        </div>
        <div className="text-content">
          <h3>Our Unmatched Expertise</h3>
          <p>
            At Le Foyer Decor, we bring unparalleled expertise in transforming spaces into showcases of style and functionality. With years of experience and a keen eye for design, we craft interiors that inspire and delight, setting new standards in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;