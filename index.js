const Discord = require("discord.js");

Client = new Discord.Client({
    fetchAllMembers: true
}),


Client.on("ready", () => {
    console.log("Bot Prêt");

});

Client.on("guildMemberAdd", guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '817098925479559249');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('817421806076035072').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});

Client.on('ready', () => {
    Client.user.setStatus("online")
    Client.user.setActivity('Servir Paul Prince')
});

Client.login(process.env.TOKEN);
