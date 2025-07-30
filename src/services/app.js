import { create } from 'zustand'

export const useAppStore = create((set) => ({
    roomId: null,
    enterRoom: (roomId) => set({ roomId }),
})) 