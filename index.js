const Discord = require("discord.js");

const bot = new Discord.Client();
const fs = require("fs");
const fetch = require('node-fetch');
const ytdl = require("ytdl-core");
const queue = new Map();
const PREFIX = '/'


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
});

bot.on('ready', () => {
    bot.user.setStatus("online")
    bot.user.setActivity('Servir Paul Prince')
});

bot.on('message', message => {

    if  (message.content.startsWith("/clear")){

        if(message.member.hasPermission('MANAGE_MESSAGES')){

            let args = message.content.trim().split(/ +/g);

            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){

                    message.channel.bulkDelete(args[1])
                    message.channel.send(`Tu as supprimé ${args[1]} messages(s)`)
                    message.channel.bulkDelete(1)

                }
                else{
                    message.channel.send(`Tu dois indiquer une valeur entre 1 et 99 !`)
                }
            }

            else{
                message.channel.send(`Tu dois indiquer un nombre de messages a supprimer !`)

            }
         }
         else{
             message.channel.send(`Tu n'as pas la permission pour utiliser cette commande !`)
         }
    }
});

bot.on('message', message => {

    if  (message.content.startsWith("/roll")){
        let responses = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
            '32',
            '33',
            '34',
            '35',
            '36',
            '37',
            '38',
            '39',
            '40',
            '41',
            '42',
            '43',
            '44',
            '45',
            '46',
            '47',
            '48',
            '49',
            '50',
            '51',
            '52',
            '53',
            '54',
            '55',
            '56',
            '57',
            '58',
            '59',
            '60',
            '61',
            '62',
            '63',
            '64',
            '65',
            '66',
            '67',
            '68',
            '69',
            '70',
            '71',
            '72',
            '73',
            '74',
            '75',
            '76',
            '77',
            '78',
            '79',
            '80',
            '81',
            '82',
            '83',
            '84',
            '85',
            '86',
            '87',
            '88',
            '89',
            '90',
            '91',
            '92',
            '93',
            '94',
            '95',
            '96',
            '97',
            '98',
            '99',
            '100',

        ]
        let Response = responses[Math.floor(Math.random()*(responses.length)-1)]
        let embed = new Discord.MessageEmbed()
        .setTitle(`Roll`)
        .setDescription(`Tu as roulé ${Response}`)
        .setColor("BLUE")
        message.channel.send(embed)
    }
});

bot.on('message', async message => {
    if(message.author.bot) return
    if(message.content.startsWith(PREFIX)) return

    const args = message.content.substring(PREFIX.length).split(" ")

    if(message.content.startsWith(`${PREFIX}play`)) {
        const voiceChannel = message.member.voice.channel
        if(!voiceChannel) return message.channel.send('Tu dois être dans un channel pour mettre de la musique.')

        try {
            var connection = await voiceChannel.join()
        } catch (error) {
            console.log(`Il y a une erreur dans la connection au channel : ${error}`)
            return message.channel.send(`Il y a une erreur dans la connection au channel : ${error}`)
        }
        
        const dispatcher = connection.play(ytdl(args[1]))
        .on('finish', () => {
            voiceChannel.leave()
        })
        .on('error', error => {
            console.log(error)
        })
        dispatcher.setVolumeLogarithmic(5 / 5)
    } else if (message.content.startsWith(`${PREFIX}stop`)) {
        if (!message.member.voice.channel) return message.channel.send('Tu dois être dans le channel pour stopper la musique')
        return undefined
    }
    });
    
bot.login(process.env.TOKEN);
