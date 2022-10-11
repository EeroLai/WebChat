import { defineStore } from 'pinia'

export const useChatStore = defineStore({
  id: 'chat-store',
  state: () => {
    return {
      join: 0,
    }
  },
  actions: {},
  getters: {
    test: state => state.join,
  },
})