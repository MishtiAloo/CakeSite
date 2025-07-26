import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";
import { userStore } from "./user.store";

export const useCartStore = create((set, get) => ({
  cartProducts: [],
  loading: false,
  error: null,
  cartTotal: 0,

  fetchAllInCart: async (user) => {
    set({ loading: true, error: null });

    if (!user) {
      set({ loading: false, error: "Please login to view cart" });
      return;
    }

    try {
      const response = await axios.post("/api/orders/cart", { user });
      set({
        cartProducts: response.data.data,
        loading: false,
        cartTotal: response.data.data.reduce(
          (total, order) => total + order.totalPrice,
          0,
        ),
      });
    } catch (error) {
      console.error("Error fetching cart orders:", error);
    }
  },

  addToCart: async (requestedOrder, user) => {
    if (!user) {
      toast.error("Please login to add items to cart");
      return;
    }

    try {
      const response = await axios.post("/api/orders", {
        user,
        requestedOrder,
      });
      set({
        cartProducts: [...get().cartProducts, response.data.data],
        cartTotal: get().cartTotal + response.data.data.totalPrice,
      });
      toast.success(`${response.data.data.product.productName} added to cart`);
    } catch (error) {
      set({ error: error.message });
      toast.error(`Failed to add to cart: ${error.message}`);
    }
  },

  updateCart: async (updatedOrderInCart) => {
    try {
      const response = await axios.put("/api/orders", updatedOrderInCart);
      set({
        cartProducts: get().cartProducts.map((prod) =>
          prod._id === updatedOrderInCart._id ? response.data.data : prod,
        ),
      });
    } catch (error) {
      set({ error: error.message });
    }
  },

  checkoutCart: async () => {
    const cartProducts = get().cartProducts;

    try {
      // instead of forEach, use for...of to catch errors with async, with forEach every await runs parallelly
      for (const order of cartProducts) {
        const updatedOrder = {
          ...order,
          state: "checked out",
        };
        await axios.put("/api/orders", updatedOrder);
      }

      // Clear cart after checkout. it also helps trigger a rerender in cartPage as cartProduct and cartTotal are states in cartPage
      set({ cartProducts: [], cartTotal: 0 });

      toast.success("Cart checked out successfully!");
    } catch (error) {
      set({ error: error.message });
      toast.error(`Failed to checkout: ${error.message}`);
      throw error;
    }
  },

  deleteFromCart: async (deletedOrder) => {
    try {
      const response = await axios.delete("/api/orders", {
        data: deletedOrder,
      });

      set({
        cartProducts: get().cartProducts.filter(
          (prod) => prod._id !== deletedOrder._id,
        ),
        cartTotal: get().cartTotal - deletedOrder.totalPrice,
      });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));
