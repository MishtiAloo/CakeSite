import React, { useEffect } from 'react'
import CakeCard from '../cards/CakeCard'
import SectionTitleBox from './SectionTitleBox'
import { useProductStore } from '../stores/product.store.js'
import BasicProductSection from './BasicProductSectionGrid.jsx';

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
      <BasicProductSection sectionTitle="Popular Cakes" products={products && products.filter((prod) => prod.totalBuys >= 100)} />
    </>
  )
}

export default PopularSection