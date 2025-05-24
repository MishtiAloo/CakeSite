import React from 'react'
import '../styles/CakeCard.css';
import { useNavigate } from 'react-router-dom';

function CakeCard({product}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/proddet', { state: { parsedProduct: product } });  
  }

  return (
    <div className='container'>
            <div className='image-container'>
                <img src= {product.productImage} alt='Cake' />
            </div>

            <div className='content'>
                <h2>{product.productName}</h2>
                <p>{product.productDescription}</p>
                <div className="foot">
                    <p>{product.productPrice}$/{product.productType == 'cake'? 'pound' : 'piece'}</p>
                      <button onClick={handleClick}>Order Now</button>
                </div>
            </div>
    </div>
  )
}

export default CakeCard