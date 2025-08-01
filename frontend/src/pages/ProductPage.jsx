import React, { useEffect } from "react";
import BasicProductSection from "../components/BasicProductSectionGrid.jsx";
import { useProductStore } from "../stores/product.store.js";
import Cart from "../components/Cart.jsx";

function ProductPage() {
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
    <div className="basic-page-container">
      <BasicProductSection
        sectionTitle="Cake Products"
        products={products.filter((prod) => prod.productType === "cake")}
      />

      <BasicProductSection
        sectionTitle="Snack Products"
        products={products.filter((prod) => prod.productType === "snacks")}
      />

      <Cart />
    </div>
  );
}

export default ProductPage;
