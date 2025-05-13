import React from 'react'
import '../styles/MottoSection.css';
import { FaTruck, FaBreadSlice, FaLeaf } from 'react-icons/fa';

function MottoSection() {
  return (
    <div className='motto-container'>
        <p style={{ color: '#007BFF' }}><FaTruck /> Delivery whole Dhaka</p>
        <p style={{ color: '#944106' }}><FaBreadSlice /> Fresh homebaked</p>
        <p style={{ color: '#228B22' }}><FaLeaf /> No preservatives</p>       
    </div>
  )
}

export default MottoSection
