import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useProductStore } from '../stores/product.store.js';


function ProductSearch() {
  const navigate = useNavigate();

  const {
    products,
    fetchProducts,
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const [typedProd, setTypedProd] = useState('');

  const handleSearchIconClick = () => {
    if (typedProd.trim() === '') {
      return;
    }

    const suggestions = products.filter((prod) => 
    prod.productName.toLowerCase().includes(typedProd.toLowerCase())
    );

    console.log(typedProd)
    console.log(suggestions);

    navigate(`/searchpage`, { state: { typedProduct: typedProd, products: suggestions } });
    setTypedProd('');
  }

  const generateSuggestions = (typedProd) => {
    if (!products || products.length === 0) return null;

    const suggestions = products.filter((prod) => 
      prod.productName.toLowerCase().includes(typedProd.toLowerCase())
    );

    if (suggestions.length === 0) {
      return <div style={{color: 'black'}}>No suggestions found</div>;
    }

    return suggestions.map((prod, index) => (
      <p key={index} className='clickables' style={{padding: '5px', color: 'black'}} onClick={() => {
          navigate(`/proddet/${prod._id}`, { state: { parsedProduct: prod }});
      }}>
        {prod.productName}
      </p>
    ));
  }

  return (
      <div style={{display:'flex', gap: '10px', alignItems: 'center'}}>
            <FaSearch className='clickables' onClick={handleSearchIconClick} style={{zIndex: '999'}}/>
            <div 
              style={{position: 'relative', zIndex: '999'}}>
                <input style={{height: '50%'}} type="text" placeholder="Search cakes/cupcakes.." value={typedProd} onChange={(e) => setTypedProd(e.target.value)} onKeyDown={(e)=>{if (e.key === 'Enter') {handleSearchIconClick()}}}/>

              {/* This div is used to show the suggestions when the user types something */}
              {typedProd &&
                <div 
                  className='basic-container' 
                  style={{backgroundColor: '#FFFFAC', width: '195px', position: 'absolute', top: '42px', borderRadius: '1rem', display: 'flex', flexDirection: 'column', fontSize: '1rem'}}>
                    {generateSuggestions(typedProd)}
                </div>
              }
            </div>

            {/* This div is used to close the suggestions when clicked outside */}
            {typedProd &&
              <div
                onClick={() => setTypedProd('')}
                style={{position: 'fixed', top: 0, left: 0, backgroundColor: 'transparent', width: '100vw', height: '100vh', zIndex: 100}}/>}
        </div>
  )
}

export default ProductSearch