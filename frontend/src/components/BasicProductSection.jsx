import React from 'react'
import SectionTitleBox from './SectionTitleBox'
import CakeCard from '../cards/CakeCard.jsx'

function BasicProductSection({sectionTitle, products}) {
  return (
    <div style={{width: '98vw', display: 'flex', flexDirection: 'column', padding: '2.5rem'}}>
      <SectionTitleBox SectionTitle= {sectionTitle} />

      <div style={{width: '90vw', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', padding: '2rem', placeItems: 'center'}}>
        {products && products.map ((product) => {return (<CakeCard product={product} key={product.id} />)})}
      </div>

    </div>
  )
}

export default BasicProductSection