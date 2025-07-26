import React from "react";
import OCCSection from "../components/OCCSection";
import Cart from "../components/Cart";

function OffersPage() {
  return (
    <div className="basic-page-container">
      <OCCSection SectionTitle="Popular Offers" />
      <OCCSection SectionTitle="For u" />
      <OCCSection SectionTitle="Monthly" />
      <Cart />
    </div>
  );
}

export default OffersPage;
