import React from "react";
import SectionTitleBox from "./SectionTitleBox";
import OfferCardCompact from "../cards/OfferCardCompact";

function OCCSection({ SectionTitle }) {
  return (
    <div>
      <SectionTitleBox SectionTitle={SectionTitle} />
      <div
        className="basic-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(410px, 1fr))",
          width: "95vw",
          padding: "1.2rem",
          gap: "1rem",
          placeItems: "center",
          backgroundColor: "#FFFFAC",
          marginTop: "1rem",
        }}
      >
        <OfferCardCompact />
        <OfferCardCompact />
        <OfferCardCompact />
        <OfferCardCompact />
      </div>
    </div>
  );
}

export default OCCSection;
