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
import * as signalR from "@microsoft/signalr";
import { useChatStore } from '~~/store/chat.js'

const chatStore = useChatStore();
if (!chatStore.userName) navigateTo('/')
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

connection.start()
    .then(function () {
        connection.invoke("SendMessage", chatStore.userName, "Hello!").catch(function (err) {
            return console.error(err.toString());
        });
    }).catch(function (err) {
        return console.error(err.toString());
    });


</script>
