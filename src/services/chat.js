import { create } from 'zustand'

export const useChatStore = create((set) => ({
  channel: {
    wellingtonsilverio: [
      {
        user: "wellingtonsilverio",
        message: "Olá, como posso ajudar você?",
        timestamp: new Date().toISOString(),
      }
    ]
  },
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