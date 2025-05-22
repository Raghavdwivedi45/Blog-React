import { create } from 'zustand'

export const majorStore = create((set) => ({
    majorId: 1234,
    setMajorId: (id) => set({ majorId: id })
}))
