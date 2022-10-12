<template>
    <div class="h-full">
        <div class="h-[95%] py-3 overflow-y-auto">
            <ChatContent />
        </div>
        <div class="h-[5%] ">
            <ChatSend />
        </div>
    </div>
</template>

<script setup>
import { useChatStore } from '~~/store/chat.js'

const chatStore = useChatStore();
if (!chatStore.userName) navigateTo('/')

</script>
