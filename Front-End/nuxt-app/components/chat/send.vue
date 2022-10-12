<template>
    <div class="h-full w-full py-1 flex items-center justify-center grid gap-2 grid-cols-5">
        <input class="h-full rounded-md col-span-4 px-2" v-model="content">
        <button class="bg-gray-100 h-full  rounded-md" @:click="SendMsg">Send</button>
    </div>
</template>
<script setup>
import * as signalR from "@microsoft/signalr";
import { useChatStore } from '~~/store/chat.js'

const chatStore = useChatStore();
const content = ref();

let connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7103/Hubs/ChatHub", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
    })
    .build();

connection.on("ChatRoom", (user, msg) => {
    console.log(user);
    console.log(msg);
});

function SendMsg() {
    connection.start()
        .then(function () {
            connection.invoke("SendMessage", chatStore.userName, content.value).catch(function (err) {
                return console.error(err.toString());
            });
        }).catch(function (err) {
            return console.error(err.toString());
        });
}
</script>
