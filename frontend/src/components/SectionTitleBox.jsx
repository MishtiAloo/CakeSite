import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

function SectionTitleBox({SectionTitle}) {
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', paddingLeft: '2.5rem', paddingRight: '2.5rem', justifyContent: 'space-between', alignItems: 'center'}}>
        <p style={{fontSize: '2.5rem', fontWeight: 'bold', }}>{SectionTitle}</p>
        <Link to="/landing" className='link'>View all <FaArrowRightLong /></Link>
    </div>
  )
}

export default SectionTitleBox