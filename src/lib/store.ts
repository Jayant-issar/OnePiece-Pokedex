import { create } from "zustand";

export const useStore = create<{controlId: number , inc: (controlId:number)=>void}>((set) => ({
  controlId: 0,
  inc: (controlId) => set((state: { controlId: number; }) => ({ controlId: controlId })),
}))

export const useNavStore = create<{currentNavId: number , changeNavId: (currentNavId:number)=>void}>((set)=>({
  currentNavId:0,
  changeNavId: (currentNavId)=>set((state:{currentNavId:number})=>({currentNavId:currentNavId}))
}))