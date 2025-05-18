import { create } from 'zustand'

export const navigateStore = create((set) => ({
    page: null,
    changePage: (val) => set({ page: val }),
    user: null,
    setUser: (id) => set({ user: id })
}))
