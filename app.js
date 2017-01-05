var tmi = require ('tmi.js');

var options = {
    options: {
      debug: true
    },
    connection: {
      cluster: "aws",
      reconnect: true
    },
    identity: {
      username: "your-bots-username-here",
      password: "oauthtokenhere"
    },
    channels: ["your-channel-here"]
};

var client = new tmi.client(options);
client.connect();

client.on('join', function (channel, username, self) {
    if(channel === "your-channel-here" && username === "wipztv"){
      client.ban("your-channel-here", "user-of-person-you-want-to-ban", "'user-of-person-you-want-to-ban' in 2016 LUL")
    }
});

client.on('connected', function(address, port) {
  client.action("your-channel-here", "Hello I am 'your-bots-username-here', my sole purpose in life is to ban 'user-of-person-you-want-to-ban");
});
