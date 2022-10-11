<template>
    <div class="flex h-[5%] bg-gray-900 text-white">
        <div class="w-1/5 h-full flex justify-center items-center">
            <button class="ring-2 ring-slate-500 rounded py-1 px-3">
                <a href="https://github.com/EeroLai" target="_blank">GitHub</a>
            </button>
        </div>
        <div class="w-3/5 h-full text-center flex justify-center items-center">
            <div>Chat Room</div>
        </div>
        <div class="w-1/5 h-full flex justify-center items-center">
            <button class="ring-2 ring-slate-500 rounded py-1 px-3" v-on:click="Exit">
                Exit
            </button>
        </div>
    </div>
</template>
  

<script setup>
import { useChatStore } from '~~/store/chat.js'

const chatStore = useChatStore();
console.log(chatStore.join);

function Exit() {
    chatStore.join++
    console.log(chatStore.join);
}
</script>