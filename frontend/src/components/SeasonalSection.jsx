import React, { useEffect } from "react";
import CakeCard from "../cards/CakeCard";
import SectionTitleBox from "./SectionTitleBox";
import { useProductStore } from "../stores/product.store";

function SeasonalSection() {
  const {
    products,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    loading,
    error,
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        width: "98vw",
        display: "flex",
        flexDirection: "column",
        padding: "2.5rem",
      }}
    >
      <SectionTitleBox SectionTitle="Seasonal Specials" />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          gap: "1.5rem",
          padding: "2rem",
        }}
      >
        {products &&
          products
            .filter((prod) => prod.cakeType === "seasonal")
            .map((product) => {
              return <CakeCard product={product} key={product.id} />;
            })}
      </div>
    </div>
  );
}

export default SeasonalSection;
