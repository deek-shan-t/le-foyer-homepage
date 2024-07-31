/* src/components/OurServices.js*/
import React, { useEffect, useRef } from 'react';
import './OurServices.css';
import logo from '../assets/icons8-view-details-50.png';

const OurServices = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentRefs = serviceRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (currentRefs) {
        currentRefs.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, []);

  return (
    <div className="our-services">
      <h2>OUR SERVICES</h2>
      <hr />
      <div className="service-boxes">
        <div className="service-box b1" ref={(el) => (serviceRefs.current[0] = el)}>
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
        <div className="service-box b2" ref={(el) => (serviceRefs.current[1] = el)}>
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
        <div className="service-box b3" ref={(el) => (serviceRefs.current[2] = el)}>
          <h3><img src={logo} alt="Service 3" className="service-logo"/>Additional Services</h3>
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
      <div className="section-space"></div>
    </div>
  );
};

export default OurServices;
