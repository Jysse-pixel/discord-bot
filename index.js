const Discord = require("discord.js");

Client = new Discord.Client({
    fetchAllMembers: true
}),


Client.on("ready", () => {
    console.log("Bot Prêt");

});

Client.on('ready', () => {
    Client.user.setStatus("online")
    Client.user.setActivity('Servir Paul Prince')
});

Client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get("817421806076035072").send(`${member} a rejoint le serveur de la Famille Prince. Nous sommes désormais ${member.guild.memberCount} ! 🎉`)
    member.roles.add("817082780319744030")
})

Client.login(process.env.TOKEN);
