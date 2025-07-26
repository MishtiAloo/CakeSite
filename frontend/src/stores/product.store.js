import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get("/api/products");
      set({ products: response.data.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addProduct: async (newProduct) => {
    try {
      const response = await axios.post("/api/products", newProduct);
      set({ products: [...get().products, response.data.data] });
    } catch (error) {
      set({ error: error.message });
    }
  },

  updateProduct: async (updatedProduct) => {
    try {
      const response = await axios.put("/api/products", updatedProduct);
      set({
        products: get().products.map((prod) =>
          prod._id === updatedProduct._id ? response.data.data : prod,
        ),
      });
    } catch (error) {
      set({ error: error.message });
    }
  },

  deleteProduct: async (deletedProduct) => {
    try {
      const response = await axios.delete("/api/products", {
        data: deletedProduct,
      });
      set({
        products: get().products.filter(
          (prod) => prod._id !== deletedProduct._id,
        ),
      });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));
