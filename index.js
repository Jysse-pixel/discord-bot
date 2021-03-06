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
    member.guild.channels.cache.get('817421806076035072').send(`${member}`, new Discord.MessageEmbed()
        .setDescription(`${member} a rejoint le serveur. Nous sommes désormais ${member.guild.memberCount} ! 🎉`)
        .setColor('#00ff00'))
    member.roles.add('817098925479559249')
})

Client.login(process.env.TOKEN);
