import React from 'react'

function OfferCard({imgSrc}) {
  return (
    <div style={{width: '70vw', minWidth: '70vw', height: '25rem', borderRadius: '2rem', overflow: 'hidden', boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 5px, rgb(0, 0, 0) 0px 0px 0px 10px'}}>

        <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src= {imgSrc} alt="Offer" />
    </div>
  )
}

export default OfferCard