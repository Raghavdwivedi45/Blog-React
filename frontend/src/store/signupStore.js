import { create } from 'zustand'

export const signupStore = create((set) => ({
    page: "choose",
    changePage: (val) => set({ page: val }),
}))



// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// removeAllBears: () => set({ bears: 0 }),
// updateBears: (newBears) => set({ bears: newBears }),




// to use zustand store
// function BearCounter() {
//   const bears = useStore((state) => state.bears)
//   return <h1>{bears} bears around here...</h1>
// }

// function Controls() {
//   const increasePopulation = useStore((state) => state.increasePopulation)
//   return <button onClick={increasePopulation}>one up</button>
// }