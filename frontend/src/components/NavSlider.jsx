import React, { useEffect, useState } from 'react'
import '../styles/NavSlider.css'
import { FaWindowClose } from "react-icons/fa";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaHome, FaInfoCircle, FaBoxOpen, FaTags, FaPhone, FaShoppingCart, FaUser } from 'react-icons/fa';
import ProductSearch from './ProductSearch';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { userStore } from '../stores/user.store';


function NavSlider() {

    const location = useLocation();
    const navigate = useNavigate();
    const {user} = userStore();

    function sliderClose() {
        const slider = document.querySelector('.slider-container');
        const nav = document.querySelector('.nav-container');
        slider.classList.remove('active');
        nav.style.transform = 'translateX(0%)';
    }

    useEffect(() => {
        sliderClose();
    }, [location.pathname]);

  return (
    <div className= 'slider-container'>
        <div className='overlay' onClick={sliderClose}></div>   
        <div className='slider'>
                <div className='slider-content'>
                    <div className='slider-logoX'>
                        <button onClick={sliderClose} style={{padding: '0', height: '2.1rem', backgroundColor: 'wheat'}}><FaWindowClose className='close-icon'/></button>
                    </div>

                    <div className='clickables' style={{width: '100%'}}>
                        {(user == null) ? 
                            <div>
                                <button style={{backgroundColor: 'wheat', color: 'black'}}>Click here to login/SignUp</button>
                            </div> :
                            <button onClick={() => navigate('/profile')} style={{display: 'flex', flexDirection: 'column',alignItems: 'start', lineHeight: '1.3rem', backgroundColor: 'wheat', width: '100%'}}>
                                <p style={{fontSize: '1.2rem', color: 'black'}}>Hi,</p>
                                <p style={{color: 'orangered', fontSize: '1.5rem', fontWeight: 'bold'}}>{user.userName}</p>
                                <p style={{color: 'gray', fontSize: '0.7rem', marginBottom: '-0.7rem', marginRight: '-0.8rem' , alignSelf: 'end'}}>click to see your profile</p>
                            </button>
                        }
                    </div>

                    <div className='slider-search'>
                        <ProductSearch />
                    </div>

                    <div className='slider-contact'>
                        <div className="basic-container clickables" style={{width: '100%'}}>
                            <h2 >Call us: <span style={{color: 'black'}}>01xxxxxxx</span></h2>
                        </div>
                        
                        <div className='basic-container' style={{width: '100%'}}>
                            <h2 style={{marginBottom: '1rem'}}>Follow Us</h2>
                            <p onClick={()=>{window.open("https://google.com", "_blank");}} className='clickables'><FaFacebook color="#3b5998" size={24} style={{ marginRight: '0.5rem' }} /> Facebook</p>
                            <p onClick={()=>{window.open("https://google.com", "_blank");}} className='clickables'><FaInstagram color="#E4405F" size={24} style={{ marginRight: '0.5rem' }} /> Instagram</p>
                            <p onClick={()=>{window.open("https://google.com", "_blank");}} className='clickables'><FaTwitter color="#1DA1F2" size={24} style={{ marginRight: '0.5rem' }} /> Twitter</p>
                            <p onClick={()=>{window.open("https://google.com", "_blank");}} className='clickables'><FaLinkedin color="#0077b5" size={24} style={{ marginRight: '0.5rem' }} /> LinkedIn</p>
                        </div>
                    </div>

                    <div className='slider-quickLinks basic-container'>
                        <h2>Quick Links</h2>
                        <div style={{paddingLeft: '2rem', margin: '1rem'}}>
                            <p className='clickables'><FaHome /> <Link to='/home'>Home</Link></p>
                            <p className='clickables'><FaInfoCircle /> <Link to='/about'>About</Link></p>
                            <p className='clickables'><FaBoxOpen /> <Link to='/prodpage'>Products</Link></p>
                            <p className='clickables'><FaTags /> <Link to='/offerpage'>Offers</Link></p>
                            <p className='clickables'><FaPhone /> <Link to='/contact'>Contact Us</Link></p>
                            <p className='clickables'><FaShoppingCart /> <Link to='/cart'>Cart</Link></p>
                            <p className='clickables'><FaUser /> <Link to='/account'>Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NavSlider