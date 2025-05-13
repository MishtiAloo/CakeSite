import React from 'react'
import '../styles/CakeCard.css';

function CakeCard({imgSrc, title, description, price}) {
  return (
    <div className='container'>
            <div className='image-container'>
                <img src= {imgSrc} alt='Cake' />
            </div>

            <div className='content'>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="foot">
                    <p>{price}$/pound</p>
                    <button>Order Now</button>
                </div>
            </div>
    </div>
  )
}

export default CakeCard