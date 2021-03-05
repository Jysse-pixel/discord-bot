const Discord = require("discord.js");

const Client = new Discord.Client;


Client.on("ready", () => {
    console.log("Bot Prêt");

});

Client.on('ready', () => {
    Client.user.setStatus("online")
    Client.user.setActivity('Servir Paul Prince')
});

Client.on("guildMemberAdd", member => {
    Client.channels.cache.get('817421806076035072').send('Bienvenue sur le Serveur de la Famille Prince $(member.user.tag)!');
});;

Client.login(process.env.TOKEN);
