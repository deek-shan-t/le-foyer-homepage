import React, { useEffect, useRef } from 'react';
import './Navbar.css';

const Header = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const scrollText = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scrollText, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="scroll-text">
          FREE consultation, FREE design, FREE execution — because your dream space shouldn’t come with a price tag! FREE consultation, FREE design, FREE execution — because your dream space shouldn’t come with a price tag!
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src="/le-foyer-logo.png" alt="Le Foyer Decor" />
        </div>
        <nav>
          <a href="/">HOME</a>
          <a href="/about">ABOUT US</a>
          <a href="/services">OUR SERVICES</a>
          <a href="/projects">OUR PROJECTS</a>
          <a href="/store">OUR STORE</a>
          <a href="/blogs">BLOGS</a>
          <a href="/contact">CONTACT US</a>
        </nav>
        <button className="talk-to-us">TALK TO US</button>
      </div>
    </header>
  );
};

export default Header;