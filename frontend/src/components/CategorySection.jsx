import React, { useEffect, useRef, useState } from "react";
import SectionTitleBox from "./SectionTitleBox";
import CakeCard from "../cards/CakeCard";
import { useProductStore } from "../stores/product.store";

function CategorySection() {
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

  useEffect(() => {
    setProductsToShow(products);
  }, [products]);

  const [sliderPos, setSliderPos] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const containerRef = useRef(null);

  const [productsToShow, setProductsToShow] = useState(products);

  const handlePClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    setSliderPos(rect.left - containerRect.left - 5);
    setSliderWidth(rect.width + 10);

    const criteria = e.target.innerText.toLowerCase();

    switch (criteria) {
      case "all": {
        setProductsToShow(products);
        break;
      }
      case "basic": {
        setProductsToShow(
          products.filter(
            (prod) =>
              prod.cakeType !== "exotic" &&
              prod.cakeType !== "seasonal" &&
              prod.cakeType !== "custom" &&
              prod.productType !== "snacks",
          ),
        );
        break;
      }
      case "exotic": {
        setProductsToShow(
          products.filter(
            (prod) =>
              prod.productType !== "snacks" &&
              (prod.cakeType === "exotic" ||
                prod.cakeType === "seasonal" ||
                prod.cakeType === "custom"),
          ),
        );
        break;
      }
      case "snacks": {
        setProductsToShow(
          products.filter(
            (prod) =>
              prod.productType === "snacks" && prod.snackType !== "daily",
          ),
        );
        break;
      }
      case "daily bakes": {
        setProductsToShow(
          products.filter(
            (prod) =>
              prod.productType === "snacks" && prod.snackType === "daily",
          ),
        );
        break;
      }
      default:
        setProductsToShow(products);
        break;
    }
  };

  return (
    <div
      style={{
        width: "98vw",
        display: "flex",
        flexDirection: "column",
        padding: "2.5rem",
      }}
    >
      <SectionTitleBox SectionTitle="Our Products" />

      {/* Option bar */}
      <div
        ref={containerRef}
        style={{
          backgroundColor: "#ff870f",
          padding: "0.5rem",
          marginTop: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
          borderRadius: "1rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
          position: "relative",
        }}
      >
        {/* White slider */}
        <div
          style={{
            backgroundColor: "white",
            height: "70%",
            position: "absolute",
            borderRadius: "0.5rem",
            opacity: "0.5",
            left: `${sliderPos}px`,
            width: `${sliderWidth}px`,
            transition: "left 0.3s ease, width 0.3s ease",
          }}
        ></div>

        {/* Options */}
        <p onClick={handlePClick} style={{ cursor: "pointer", zIndex: 1 }}>
          All
        </p>
        <p onClick={handlePClick} style={{ cursor: "pointer", zIndex: 1 }}>
          Basic
        </p>
        <p onClick={handlePClick} style={{ cursor: "pointer", zIndex: 1 }}>
          Exotic
        </p>
        <p onClick={handlePClick} style={{ cursor: "pointer", zIndex: 1 }}>
          snacks
        </p>
        <p onClick={handlePClick} style={{ cursor: "pointer", zIndex: 1 }}>
          Daily bakes
        </p>
      </div>

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
        {productsToShow &&
          productsToShow.map((product) => {
            return <CakeCard product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
}

export default CategorySection;
