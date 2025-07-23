import { create } from 'zustand'

export const useChatStore = create((set) => ({
  channel: {},
  addChannel: (channelId) => set((state) => ({
    channel: {
      ...state.channel,
      [channelId]: [...state.channel[channelId]],
    }
  })),
  addMessage: (channelId, user, message) => set((state) => ({
    channel: {
      ...state.channel,
      [channelId]: [
        ...state.channel[channelId],
        {
          user,
          message,
          timestamp: new Date().toISOString(),
        }
      ]
    }
  })),
}))