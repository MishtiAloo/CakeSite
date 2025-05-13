import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

function Navbar() {

    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerPoint = window.innerHeight * 0.12;
        setIsFixed(scrollY > triggerPoint);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        
        const menu = document.querySelector('.slider-container');
        menu.classList.toggle('active');

        const nav = document.querySelector('.nav-container');
        nav.style.transform = 'translateX(-100%)';
    }

  return (
    <div className={`nav-container ${isFixed? 'fixed' : ''}`}>
        <div className='nav-logo'>
            <img src={logo} alt="Logo" />
        </div>
        <div className='nav-links'>
            <p className='clickables'>Home</p>
            <p className='clickables'>About</p>
            <p className='clickables'>Products</p>
            <p className='clickables'>Offers</p>
            {/* <p>Contact</p> */}
            <p className='clickables'>Cart</p>
            <p className='clickables'>Account</p>
        </div>
        <div className='nav-search'>
            <FaSearch className='clickables'/>
            <input style={{height: '50%'}} type="text" placeholder="Search cakes/cupcakes.." />
        </div>

        <div className='nav-profile-menu'>
            <div className="account clickables">
                <img src="https://www.bssnews.net/assets/news_photos/2023/02/05/image-109069-1675599623.jpg" alt="" />
            </div>

            <div className="menu clickables" onClick={handleMenu}>
                <GiHamburgerMenu />
            </div>
        </div>
    </div>
  )
}

export default Navbar