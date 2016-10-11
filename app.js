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
      password: "oauthcodehere"
    },
    channels: ["supermansbrother"]
};

var client = new tmi.client(options);
client.connect();

client.on('join', function (channel, username, self) {
  if(username = "WipzTV") {
    client.ban ("supermansbrother", "WipzTV", "Wipz in 2016 LUL")
  } else {
      client.action("supermansbrother", user['display-name'] + ", welcome to the stream!")
  }
});

client.on('connected', function(address, port) {
  client.action("supermansbrother", "Hello I am BanWipzBot, my sole purpose in life is to ban WipzTV");
});
