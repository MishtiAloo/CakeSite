import React from 'react'
import '../styles/CakeCard.css';

function CakeCard({product}) {
  return (
    <div className='container'>
            <div className='image-container'>
                <img src= {product.productImage} alt='Cake' />
            </div>

            <div className='content'>
                <h2>{product.productName}</h2>
                <p>{product.productDescription}</p>
                <div className="foot">
                    <p>{product.productPrice}$/pound</p>
                    <button>Order Now</button>
                </div>
            </div>
    </div>
  )
}

export default CakeCard