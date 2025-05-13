import React from 'react'
import '../styles/ReviewCard.css'

function ReviewCard({imgSrc, name, description}) {
  return (
    <div className='rev-container'>

        <div style={{display: 'flex', flexDirection : 'row', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
            <div className="rev-img-container">
                <img src={imgSrc} alt="" />
            </div>
            <h3>{name}</h3>
        </div> 
            
        <p>{description}</p>
    </div>
  )
}

export default ReviewCard