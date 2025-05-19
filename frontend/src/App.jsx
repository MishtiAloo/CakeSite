import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HeroSection from './components/HeroSection'
import PopularSection from './components/PopularSection'
import CakeCard from './cards/CakeCard'
import SeasonalSection from './components/SeasonalSection'
import HomePage from './pages/HomePage'
import OfferSection from './components/OfferSection'
import OfferCard from './cards/OfferCard'
import CategorySection from './components/CategorySection'
import DeliveryStoreSection from './components/DeliveryStoreSection'
import CustomerReviewSection from './components/CustomerReviewSection'
import ReviewCard from './cards/ReviewCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MottoSection from './components/MottoSection'
import Cart from './components/Cart'
import GoToTop from './components/GoToTop'
import NavSlider from './components/NavSlider'
import AboutPage from './pages/AboutPage'
import OffersPage from './pages/OffersPage'
import OfferCardCompact from './cards/OfferCardCompact'
import OCCSection from './components/OCCSection'
import ProductPage from './pages/ProductPage'
import BasicProductSection from './components/BasicProductSection'

function App() {

  return (
    <>

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/pop" element={<PopularSection />} />
          <Route path="/cake" element={<CakeCard />} />
          <Route path="/seas" element={<SeasonalSection />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/offer" element={<OfferSection />} />
          <Route path="/off" element={<OfferCard />} />
          <Route path="/cat" element={<CategorySection />} />
          <Route path="/del" element={<DeliveryStoreSection />} />
          <Route path="/cust" element={<CustomerReviewSection />} />
          <Route path="/rev" element={<ReviewCard />} />
          <Route path="/foot" element={<Footer />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/motto" element={<MottoSection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/top" element={<GoToTop />} />
          <Route path="/slider" element={<NavSlider />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/offerpage" element={<OffersPage />} />
          <Route path="/offcomp" element={<OfferCardCompact />} />
          <Route path="/occsec" element={<OCCSection />} />
          <Route path="/prodpage" element={<ProductPage />} />
        </Routes>

        <Footer />
      </Router>
      
    </>
  )
}

export default App
