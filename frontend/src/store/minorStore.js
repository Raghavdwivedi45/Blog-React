import { create } from 'zustand'

export const minorStore = create((set) => ({
    minorInfo: null,
    setMinorInfo: (info) => set({ minorInfo: info }),
}))
