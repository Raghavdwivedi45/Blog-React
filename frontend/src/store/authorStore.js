import { create } from 'zustand'

export const authorStore = create((set) => ({
    authorInfo: null,
    setAuthorInfo: (id) => set({ authorInfo: id }),
}))
