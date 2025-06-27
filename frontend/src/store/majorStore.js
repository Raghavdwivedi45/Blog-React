import { create } from 'zustand'

export const majorStore = create((set) => ({
    majorInfo: null,
    setMajorInfo: (info) => set({ majorInfo: info }),
    submajorIdx: null,
    setSubmajorIdx: (idx) => set({ submajorIdx: idx })
}))
