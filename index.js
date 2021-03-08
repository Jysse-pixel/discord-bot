
const Discord = require("discord.js");

const bot = new Discord.Client();


bot.on("ready", () => {
    console.log("Bot Prêt");
});

bot.on('guildMemberAdd', (member) => {
    let channelID = '817421806076035072';
    if (member.guild.id != '817046353468194877') return;
    let embed = new Discord.MessageEmbed()
    .setTitle(`Famille Prince`)
    .setDescription(`\`${member.user.tag}\` a rejoint le serveur de la Famille Prince ! 🎉`)
    .setColor("BLUE")
    .setTimestamp()
    bot.channels.cache.get(channelID).send(embed)
    member.roles.add('817098925479559249')
})

bot.on('ready', () => {
    bot.user.setStatus("online")
    bot.user.setActivity('Servir Paul Prince')
})

bot.login(process.env.TOKEN);
