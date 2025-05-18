import React from 'react'
import SectionTitleBox from './SectionTitleBox'
import OfferCard from '../cards/OfferCard'

function OfferSection() {
  return (
    <div style={{width: '98vw', display: 'flex', flexDirection: 'column', padding: '2.5rem'}}>

        <SectionTitleBox SectionTitle='Popular Offers' SectionLink='/offerpage'/>

        <div style={{display: 'flex', flexDirection: 'row', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', gap: '1.5rem', padding: '2rem'}}>

            <OfferCard imgSrc='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cakes-offer-design-template-e568e6ed829c83299336d4c1a58a580a_screen.jpg?ts=1641645288' />
            <OfferCard imgSrc='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cake-offers-design-template-cf73667ef1f368193360642a5460c02d_screen.jpg?ts=1612374515' />
            <OfferCard imgSrc='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-cake-offer-flyer-design-template-4827ca6e6b548d9cd00a756efc4df941_screen.jpg?ts=1705658447' />
            <OfferCard imgSrc='https://cdn.create.vista.com/downloads/3617727a-7af9-4ad9-934e-3fd6db678b5e_1024.jpeg' />
            <OfferCard imgSrc='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/birthday-special-offer-cake-design-template-c0335d759de21891b4131d5022bc8b11_screen.jpg?ts=1646814526' />
        </div>
    </div>
  )
}

export default OfferSection