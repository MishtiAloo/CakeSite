import React from 'react'
import BasicProductSectionGrid from '../components/BasicProductSectionGrid'
import { useLocation } from 'react-router-dom'

function SearchedPage() {
    const location = useLocation();
    const { typedProduct, products } = location.state || {};

  return (
    <div className='basic-page-contianer' style={{paddingTop: '2rem'}}>
        {console.log(typedProduct, products)}
        {products && products.length > 0 ? <BasicProductSectionGrid sectionTitle={`showing result for '${typedProduct}'`} products={products}/> : <div style={{textAlign: 'center', padding: '2rem', fontSize: '1.5rem', fontWeight: 'bold'}}>No products found for '{typedProduct}'</div>}
    </div>
  )
}

export default SearchedPage