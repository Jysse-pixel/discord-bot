const Discord = require("discord.js");

Client = new Discord.Client({
    fetchAllMembers: true
}),


Client.on("ready", () => {
    console.log("Bot Prêt");
});

Client.on('guildMemberAdd', (member) => {
    let channelID = '817421806076035072';
    if(member.guild.id != '817046353468194877') return;
    let embed = new Discord.MessageEmbed()
    .setTitle(`Famille Prince`)
    .setDescription(`\`${member.username}\` a rejoint le serveur de la Famille Prince ! 🎉`)
    .setColor("BLUE")
    .setTimestamp()
    Client.guild.channels.cache.get(channel.ID).send(embed)
    member.roles.add('817098925479559249')
})

Client.on('ready', () => {
    Client.user.setStatus("online")
    Client.user.setActivity('Servir Paul Prince')
})

Client.login(process.env.TOKEN);
