import { create } from 'zustand'
import { API_BASE_URL } from '../config/api';

export const useChatStore = create((set, get) => ({
  channel: {
    wellingtonsilverio: [
      {
        user: "wellingtonsilverio",
        message: "Olá, tudo bem? Como posso ajudar você hoje?",
        timestamp: new Date().toISOString(),
      }
    ]
  },
  loading: false,
  error: null,

  addChannel: (channelId) => set((state) => ({
    channel: {
      ...state.channel,
      [channelId]: [...state.channel[channelId]],
    }
  })),

  addMessage: async (channelId, user, message) => {
    const state = get();
    const currentMessages = state.channel[channelId] || [];

    // Adicionar mensagem do usuário imediatamente
    set((state) => ({
      channel: {
        ...state.channel,
        [channelId]: [
          ...currentMessages,
          {
            user,
            message,
            timestamp: new Date().toISOString(),
          }
        ]
      },
      loading: true,
      error: null
    }));

    try {
      // Preparar mensagens para a API (formato OpenAI)
      const apiMessages = currentMessages.map(msg => ({
        role: msg.user === 'wellingtonsilverio' ? 'assistant' : 'user',
        content: msg.message
      }));

      // Adicionar a nova mensagem do usuário
      apiMessages.push({
        role: 'user',
        content: message
      });

      // Fazer requisição para a API
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages
        })
      });

      const data = await response.json();

      if (data.success) {
        // Adicionar resposta do bot
        set((state) => ({
          channel: {
            ...state.channel,
            [channelId]: [
              ...state.channel[channelId],
              {
                user: "wellingtonsilverio",
                message: data.data.response,
                timestamp: data.data.timestamp || new Date().toISOString(),
              }
            ]
          },
          loading: false,
          error: null
        }));
      } else {
        throw new Error(data.message || 'Erro na API');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);

      // Adicionar mensagem de erro do bot
      set((state) => ({
        channel: {
          ...state.channel,
          [channelId]: [
            ...state.channel[channelId],
            {
              user: "wellingtonsilverio",
              message: "Desculpe, tive um problema técnico. Pode tentar novamente? 😅",
              timestamp: new Date().toISOString(),
            }
          ]
        },
        loading: false,
        error: error.message
      }));
    }
  },

  // Função para verificar se a API está funcionando
  checkAPIHealth: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('API não está respondendo:', error);
      return false;
    }
  },
}))