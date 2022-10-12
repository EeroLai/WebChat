<template>
  <div class="h-full flex justify-center items-center">
    <div class="bg-gray-800 p-3 rounded-lg">
      <div class="font-mono text-center m-3">
        <span class="text-2xl text-white">Welcome Chat Room</span>\
      </div>
      <div class="my-2 px-3">
        <span class="text-white">User Name</span>
        <input class="flex w-full my-3 px-2 rounded-md" v-model="userName">
      </div>
      <div class="px-3 flex justify-end ">
        <button class="bg-slate-100 py-1 px-2 rounded-md shadow-slate-800" @click="join">Join</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useChatStore } from '~~/store/chat.js'

const chatStore = useChatStore();
const route = useRoute()
const userName = ref();

chatStore.userName = '';
chatStore.joinState = false;

async function join() {
  if (!userName.value) alert('User Name Empty!');

  if (userName.value) {
    chatStore.userName = userName.value;
    chatStore.joinState = true;
    await navigateTo('/chatroom');
  }
}
</script>