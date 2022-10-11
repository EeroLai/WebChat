using Microsoft.AspNetCore.SignalR;

namespace InstantMessengerApi.Hubs
{
    public class ChatHub : Hub
    {
        public Task SendMessage(string user, string msg)
        {
            return Clients.All.SendAsync("ChatRoom", user, msg);
        }
    }
}