import React from 'react'
import HeroSection from '../components/HeroSection'
import PopularSection from '../components/PopularSection'
import SeasonalSection from '../components/SeasonalSection'
import OfferSection from '../components/OfferSection'
import CategorySection from '../components/CategorySection'
import DeliveryStoreSection from '../components/DeliveryStoreSection'
import CustomerReviewSection from '../components/CustomerReviewSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MottoSection from '../components/MottoSection'
import Cart from '../components/Cart'
import GoToTop from '../components/GoToTop'
import NavSlider from '../components/NavSlider'

function HomePage() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        {/* <Navbar/> */}
        <HeroSection/>
        <MottoSection/>
        <PopularSection/>
        <SeasonalSection/>
        <OfferSection/>
        <CategorySection/>
        <DeliveryStoreSection/>
        <CustomerReviewSection/>
        <Footer/>
        <Cart/>
        <GoToTop/>
        <NavSlider />
    </div>
  )
}

export default HomePage