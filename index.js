const Discord = require("discord.js");

const Client = new Discord.Client;


Client.on("ready", () => {
    console.log("Bot Prêt");

});

bot.on('ready'), async () =>{
    bot.user.setStatus("online")
    bot.user.activity("servir Paul Prince !")
};

Client.on("guildMemberAdd", member => {
    member.guild.channels.cache.find(channel => channel.id === "817421806076035072".send('Bienvenue, ' + member.user.tag + ' !' ))
    member.roles.add("817098925479559249")
});

Client.login(process.env.TOKEN);
