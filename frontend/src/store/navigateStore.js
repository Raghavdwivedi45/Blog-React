import { create } from 'zustand'

export const navigateStore = create((set) => ({
    page: [],
    changePage: (val) => set((state) => ({
    page: [...state.page, val]  // append val to the existing array
    })),
    popPage: () => set((state) => ({
    page: state.page.slice(0, -1)  // remove last element
    })),
    user: null,
    setUser: (id) => set({ user: id }),
    likes: null,
    setLikes: (arr) => set({ likes: arr }),
    pushLikes: (val) => set((state) => {
      const exists = state.likes?.some(item => item.toString() === val.toString());

      return {
        likes: exists
          ? state.likes.filter(item => item.toString() !== val.toString())
          : [...(state.likes || []), val]
      };
  }),
}))
