const Discord = require("discord.js");

Client = new Discord.Client({
    fetchAllMembers: true
}),


Client.on("ready", () => {
    console.log("Bot Prêt");
});

Client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get('817421806076035072').send(`${member} a rejoint le serveur. Nous sommes désormais ${member.guild.memberCount} ! 🎉`)
    member.roles.add('817098925479559249')
})
 
Client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get('817421806076035072').send(`${member.user.tag} a quitté le serveur... 😢`)
})

Client.on('ready', () => {
    Client.user.setStatus("online")
    Client.user.setActivity('Servir Paul Prince')
});

Client.login(process.env.TOKEN);
