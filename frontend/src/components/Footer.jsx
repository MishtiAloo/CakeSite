import React from 'react'
import '../styles/Footer.css'
import { FaHome, FaInfoCircle, FaPhone, FaShieldAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer-container'>

        <div className='footer-section'>
            <h2 className='footer-label'>Links</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><FaHome style={{ marginRight: '0.5rem'}} /> Home</li>
                <li><FaInfoCircle style={{ marginRight: '0.5rem' }} /> About</li>
                <li><FaPhone style={{ marginRight: '0.5rem' }} /> Contact</li>
                <li><FaShieldAlt style={{ marginRight: '0.5rem' }} /> Privacy Policy</li>
            </ul>

        </div>

        {/* darkline */}
        <div style={{width: '0.5vw', backgroundColor: '#EBC26D', borderRadius: '1rem', alignSelf: 'stretch'}}></div>

        <div className='footer-section'>
            <h2 className='footer-label'>Get in touch</h2>
            <input type="email" placeholder='Your email address' />
            <textarea name="" id="" cols="25" rows="5" placeholder='Enter mail here...' style={{marginTop: '1rem', marginBottom: '1rem'}}></textarea>
            <button>Send</button>
        </div>

        {/* darkline */}
        <div style={{width: '0.5vw', backgroundColor: '#EBC26D', borderRadius: '1rem', alignSelf: 'stretch'}}></div>

        <div className='footer-section'>
            <h2 className='footer-label'>Follow Us</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><FaFacebook color="#3b5998" size={24} style={{ marginRight: '0.5rem' }} /> Facebook</li>
                <li><FaInstagram color="#E4405F" size={24} style={{ marginRight: '0.5rem' }} /> Instagram</li>
                <li><FaTwitter color="#1DA1F2" size={24} style={{ marginRight: '0.5rem' }} /> Twitter</li>
                <li><FaLinkedin color="#0077b5" size={24} style={{ marginRight: '0.5rem' }} /> LinkedIn</li>
            </ul>
        </div>
        


        
    </div>
  )
}

export default Footer