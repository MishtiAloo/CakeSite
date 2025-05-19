import React, { useEffect } from 'react'
import CakeCard from '../cards/CakeCard'
import SectionTitleBox from './SectionTitleBox'
import { useProductStore } from '../stores/product.store.js'

function PopularSection() {
  const {
    products,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    loading,
    error,
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', rowGap: '2rem', flexWrap: 'wrap', padding: '2.5rem', gap: '2rem'}}>

        <SectionTitleBox SectionTitle="Popular Cakes" />

        {products && products.filter((prod) => prod.totalBuys >= 100).map ((product) => {return (<CakeCard product={product} key={product.id} />)})}
    </div>
    </>
  )
}

export default PopularSection