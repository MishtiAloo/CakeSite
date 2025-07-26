import React from "react";
import HeroSection from "../components/HeroSection";
import PopularSection from "../components/PopularSection";
import SeasonalSection from "../components/SeasonalSection";
import OfferSection from "../components/OfferSection";
import CategorySection from "../components/CategorySection";
import DeliveryStoreSection from "../components/DeliveryStoreSection";
import CustomerReviewSection from "../components/CustomerReviewSection";
import MottoSection from "../components/MottoSection";
import Cart from "../components/Cart";
import GoToTop from "../components/GoToTop";

function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <HeroSection />
      <MottoSection />
      <PopularSection />
      <SeasonalSection />
      <OfferSection title="Offers" />
      <CategorySection />
      <DeliveryStoreSection />
      <CustomerReviewSection />
      <Cart />
      <GoToTop />
      {/* <NavSlider /> */}
    </div>
  );
}

export default HomePage;
