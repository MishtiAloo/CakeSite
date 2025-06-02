import React from 'react'
import fokir from '../assets/fokir.png'

function AboutPage() {
  return (
    <div className='basic-page-container'>

        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '2rem'}}>
            <div className="basic-image-container" style={{height: '50vh'}}>
                <img src="https://i.redd.it/qjah9eqgbrf81.jpg" alt="" />
            </div>
            <div className="basic-image-container" style={{height: '50vh'}}>
                <img src={fokir} alt="" />
            </div>
        </div>

        <div>
            <h1>About Us</h1>
            <p style={{fontSize: '1.5rem', textAlign: 'center', maxWidth: '600px'}}>
                Please buy our overpriced products. We need money to buy cocaine and hookers.
            </p>
        </div>
    </div>
  )
}

export default AboutPage