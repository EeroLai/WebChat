import { defineStore } from 'pinia'
import * as signalR from "@microsoft/signalr";

export const useChatStore = defineStore({
  id: 'store',
  state: () => (
    {
      joinState: false,
      userName: '',
      chatContent: []
    }
  )
})
