const Discord = require("discord.js");

const Client = new Discord.Client;


Client.on("ready", () => {
    console.log("Bot Prêt");

});

Client.on('ready', () => {
    Client.user.setStatus("online")
    Client.user.setActivity('Servir Paul Prince')
});

Client.on("guildMemberAdd", (member) => {
    let welcomeChannel = client.channels.find(ch => ch.name === "🎷-bienvenue-🎺");
    welcomeChannel.send('Bienvenue, ' + member.user.tag + ' !'); // tag == User#1234
    member.roles.add("817098925479559249");
});

Client.login(process.env.TOKEN);
