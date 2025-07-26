import React from "react";
import SectionTitleBox from "./SectionTitleBox.jsx";
import CakeCard from "../cards/CakeCard.jsx";

function BasicProductSection({ sectionTitle, products }) {
  return (
    <div
      style={{
        width: "98vw",
        display: "flex",
        flexDirection: "column",
        padding: "2.5rem",
      }}
    >
      <SectionTitleBox SectionTitle={sectionTitle} />

      <div
        style={{
          width: "90vw",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          padding: "2rem 1rem",
          rowGap: "2.5rem",
          placeItems: "center",
        }}
      >
        {products &&
          products.map((product) => {
            return <CakeCard product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
}

export default BasicProductSection;
