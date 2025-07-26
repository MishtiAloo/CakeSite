import React from "react";
import "../styles/OfferCardCompact.css";

function OfferCardCompact({ imgSrc, title, description, minSpend, code }) {
  return (
    <div className="OCC-container basic-container">
      <div className="OCC-image-part">
        <div className="basic-image-container" style={{ height: "100%" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-5M9yLVynNdxABGnsabZRjYi2qUKb7akeA&s"
            alt=""
          />
        </div>
      </div>

      <div className="OCC-content-part">
        <h2>Offer Title</h2>
        <p>We are giving it away cuz its been rotten as nobody buys it</p>
        <div className="OCC-foot">
          <p>Minimum Spend: 1045$</p>
          <p className="basic-container clickables">Code: B2G1XXX</p>
        </div>
      </div>
    </div>
  );
}

export default OfferCardCompact;
