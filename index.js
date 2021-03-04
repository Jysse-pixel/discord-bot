const Client = new Discord.Client;


Client.on("ready", () => {
    console.log("Bot Prêt");

});

Client.login(process.env.TOKEN);