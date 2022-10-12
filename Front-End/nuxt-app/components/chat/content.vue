<template>
    <div class="grid gap-4">
        <div class="grid gap-4" v-for="(item, index) in chatStore.chatContent">
            <div class="px-2 w-full flex" v-if="(item.user != chatStore.userName)">
                <div class="w-[15%] my-3 text-center">
                    {{item.user}}
                </div>
                <div class="bg-gray-200 rounded-md px-2 w-[85%] text-start">
                    {{item.msg}}
                </div>
            </div>
            <div class="px-2 w-full flex" v-if="(item.user == chatStore.userName)">
                <div class="bg-white rounded-md px-2 w-[85%] text-start">
                    {{item.msg}}
                </div>
                <div class="w-[15%] my-3 text-center">
                    {{item.user}}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import * as signalR from "@microsoft/signalr";
import { useChatStore } from '~~/store/chat.js'

const chatStore = useChatStore();

// let connection = new signalR.HubConnectionBuilder()
//     .withUrl("https://localhost:7103/Hubs/ChatHub", {
//         skipNegotiation: true,
//         transport: signalR.HttpTransportType.WebSockets
//     })
//     .build();

// connection.on("ChatRoom", (user, msg) => {
//     console.log(user);
//     console.log(msg);
// });
</script>
