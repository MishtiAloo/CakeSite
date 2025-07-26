import React from "react";
import SectionTitleBox from "./SectionTitleBox";
import "../styles/DeliveryStore.css";

import deliveryImg from "../assets/Delivery.png";
import storeImg from "../assets/store.jpg";

function DeliveryStoreSection() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        rowGap: "1.5rem",
        flexWrap: "wrap",
        padding: "2.5rem",
      }}
    >
      <SectionTitleBox SectionTitle="Delivery Services & Store Locations" />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div className="del-image-container">
          <img
            style={{ width: "100%", height: "100%" }}
            src={deliveryImg}
            alt=""
          />
        </div>
        <div className="del-image-container">
          <img
            style={{ width: "100%", height: "100%" }}
            src={storeImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default DeliveryStoreSection;
