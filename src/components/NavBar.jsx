import React, { useEffect, useRef,useState } from 'react';
import './Navbar.css';
import { motion, useAnimationControls } from 'framer-motion';
const Header = () => {
  const scrollContainerRef = useRef(null);
  const [navDis, setnavDis] = useState("none")
  const [wobble,setWobble] = useState(0);
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      if(window.innerWidth>=576){
        setnavDis("flex")
      }else
      {
        setnavDis("none");
      }
    })
  })
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

        <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>

        <div className="logo">
          <img src="/le-foyer-logo.png" alt="Le Foyer Decor" />
        </div>

        <div className='MenuLogoButton' >
          <img src="/MenuButtonLogo.png" alt="" style={{'width':'10vw'}} onClick={()=>{
            if(navDis === "flex"){
              setnavDis("none");
            }else{
              setnavDis("flex");
            }
            setWobble(wobble==1?0:1);
          }}/>
        </div>
        </div>
        <nav style={{'display':navDis}} wobble = {wobble} onAnimationEnd={()=>setWobble(0)} >
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