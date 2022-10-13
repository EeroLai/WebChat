import { defineStore } from 'pinia'
import * as signalR from "@microsoft/signalr";

export const useChatStore = defineStore('store', () => {
  const joinState = ref(false);
  const userName = ref('');
  const chatContent = ref([]);
  const firstCreateSignalR = ref(true);
  return {
    joinState,
    userName,
    chatContent,
    firstCreateSignalR
  }
});

