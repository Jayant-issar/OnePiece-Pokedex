import { create } from "zustand";

export const useStore = create<{controlId: number , inc: (controlId:number)=>void}>((set) => ({
  controlId: 1,
  inc: (controlId) => set((state: { controlId: number; }) => ({ controlId: controlId })),
}))