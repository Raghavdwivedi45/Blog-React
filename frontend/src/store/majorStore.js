import { create } from 'zustand'

export const majorStore = create((set) => ({
    majorInfo: null,
    setMajorInfo: (id) => set({ majorInfo: id })
}))
