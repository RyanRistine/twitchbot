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
      username: "banwipzbot",
      password: "oauthtokenhere"
    },
    channels: ["supermansbrother"]
};

var client = new tmi.client(options);
client.connect();

client.on('join', function (channel, username, self) {
    if(channel === "supermansbrother" && username === "WipzTV"){
      client.ban("supermansbrother", "WipzTV", "Wipz in 2016 LUL")
    }
});

client.on('connected', function(address, port) {
  client.action("supermansbrother", "Hello I am BanWipzBot, my sole purpose in life is to ban WipzTV");
});
