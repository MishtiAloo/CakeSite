import { create } from 'zustand';

export const userStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
  deleteUser: async (deletedUser) => {
    try {
        const response = await axios.delete('/api/users', {data: deletedUser});
        set ({user: null })
    } catch (error) {
        set({ error: error.message });
    }
}
}));
