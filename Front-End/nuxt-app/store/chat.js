import { defineStore } from 'pinia'

export const useChatStore = defineStore({
  id: 'store',
  state: () => {
    return {
      joinState: false,
      userName: '',
    }
  },
  actions: {},
  getters: {
    test: state => state.join,
  },
})