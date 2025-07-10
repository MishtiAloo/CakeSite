import axios from 'axios';
import { create } from 'zustand';

export const userStore = create((set) => ({
  user: null,
  userOrders: [],

  setUser: async (user) => {
    try {
      // Fetch user's orders
      const response = await axios.post('/api/orders/allorders', { user });
      const orders = response.data.data;

      set({ user, userOrders: orders });
    } catch (error) {
      console.error('Failed to fetch user orders:', error);
      set({ user, userOrders: [] }); // fallback if fetching orders fails
    }
  },

  logout: () => set({ user: null, userOrders: [] }),

  deleteUser: async (deletedUser) => {
    try {
      const response = await axios.delete('/api/users', { data: deletedUser });
      set({ user: null, userOrders: [] });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));
