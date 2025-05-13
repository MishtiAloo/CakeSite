import React, { useState } from 'react'
import '../styles/NavSlider.css'
import { FaWindowClose } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaHome, FaInfoCircle, FaBoxOpen, FaTags, FaPhone, FaShoppingCart, FaUser } from 'react-icons/fa';

function NavSlider() {

    function sliderClose() {
        const slider = document.querySelector('.slider-container');
        const nav = document.querySelector('.nav-container');
        slider.classList.remove('active');
        nav.style.transform = 'translateX(0%)';
    }

  return (
    <div className= 'slider-container'>
        <div className='overlay' onClick={sliderClose}></div>   
        <div className='slider'>
                <div className='slider-content'>
                    <div className='slider-logoX'>
                        <button onClick={sliderClose} style={{padding: '0', height: '2.1rem', backgroundColor: 'wheat'}}><FaWindowClose className='close-icon'/></button>
                    </div>

                    <div className='slider-search'>
                        <FaSearch className='clickables'/>
                        <input style={{height: '2rem'}} type="text" placeholder='Search cakes/cupcakes..' />
                    </div>

                    <div className='slider-contact'>
                        <div className="basic-container clickables">
                            <h2>Call us: 01xxxxxx</h2>
                        </div>
                        
                        <div className='basic-container'>
                            <h2 style={{marginBottom: '1rem'}}>Follow Us</h2>
                            <p className='clickables'><FaFacebook color="#3b5998" size={24} style={{ marginRight: '0.5rem' }} /> Facebook</p>
                            <p className='clickables'><FaInstagram color="#E4405F" size={24} style={{ marginRight: '0.5rem' }} /> Instagram</p>
                            <p className='clickables'><FaTwitter color="#1DA1F2" size={24} style={{ marginRight: '0.5rem' }} /> Twitter</p>
                            <p className='clickables'><FaLinkedin color="#0077b5" size={24} style={{ marginRight: '0.5rem' }} /> LinkedIn</p>
                        </div>
                    </div>

                    <div className='slider-quickLinks basic-container'>
                        <h2>Quick Links</h2>
                        <div style={{paddingLeft: '2rem', margin: '1rem'}}>
                            <p className='clickables'><FaHome /> Home</p>
                            <p className='clickables'><FaInfoCircle /> About</p>
                            <p className='clickables'><FaBoxOpen /> Products</p>
                            <p className='clickables'><FaTags /> Offers</p>
                            <p className='clickables'><FaPhone /> Contact</p>
                            <p className='clickables'><FaShoppingCart /> Cart</p>
                            <p className='clickables'><FaUser /> Account</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NavSlider