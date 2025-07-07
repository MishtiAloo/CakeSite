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
import ProductDetailsPage from './pages/ProductDetailsPage'
import StarRating from './components/StarRating'
import PlusMinus from './components/PlusMinus'
import ScrollToTop from './components/ScrollToTop'
import ProductSearch from './components/ProductSearch'
import SearchedPage from './pages/SearchedPage'
import CartPage from './pages/CartPage'
import GoogleLoginComponent from './components/GoogleLoginComponent'
import LoginSignUpPage from './pages/LoginSignUpPage'
import LoginModal from './modals/LoginModal'
import SignupModal from './modals/SignupModal'
import { useEffect } from 'react'
import { useCartStore } from './stores/cart.store'

function App() {

  //To always keep the the cart updated even in page reload
  const {fetchAllInCart} = useCartStore();
  useEffect(() => {
    fetchAllInCart();
  }, []);

  return (
    <>

      <Router>
        <Navbar />
        <ScrollToTop />
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
          <Route path="/mini-cart" element={<Cart />} />
          <Route path="/top" element={<GoToTop />} />
          <Route path="/slider" element={<NavSlider />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/offerpage" element={<OffersPage />} />
          <Route path="/offcomp" element={<OfferCardCompact />} />
          <Route path="/occsec" element={<OCCSection />} />
          <Route path="/prodpage" element={<ProductPage />} />
          <Route path="/proddet/:id" element={<ProductDetailsPage />} />
          <Route path="/star" element={<StarRating />} />
          <Route path="/plusmin" element={<PlusMinus />} />
          <Route path="/psearch" element={<ProductSearch />} />
          <Route path="/searchpage" element={<SearchedPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/glogin" element={<GoogleLoginComponent />} />
          <Route path="/logsign" element={<LoginSignUpPage />} />
          <Route path="/loginmodal" element={<LoginModal />} />
          <Route path="/signupmodal" element={<SignupModal />} />
        </Routes>

        <Footer />
      </Router>
      
    </>
  )
}

export default App
