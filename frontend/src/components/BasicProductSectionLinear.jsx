import React from "react";
import SectionTitleBox from "./SectionTitleBox";
import CakeCard from "../cards/CakeCard.jsx";

function BasicProductSectionLinear({ sectionTitle, products }) {
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
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          gap: "1.5rem",
          padding: "2rem 1rem",
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

export default BasicProductSectionLinear;
