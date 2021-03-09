const Discord = require("discord.js");

const bot = new Discord.Client();

const ytdl = require('ytdl-core')
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
        if (message.author.bot) return;
        if (!message.content.startsWith("!")) return;

        const serverQueue = queue.get(message.guild.id);
        if (message.content.startsWith(`/play`)) {
            execute(message, serverQueue);
            return;
        } else if (message.content.startsWith(`/skip`)) {
            skip(message, serverQueue);
            return;
        } else if (message.content.startsWith(`/stop`)) {
            stop(message, serverQueue);
            return;
        } else if (message.content.startsWith(`/pause`)) {
            pause(message, serverQueue);
            return;
        } else {
            message.channel.send('Tu dois entrer une commande valide');
        };




    async function execute(message, serverQueue, args) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel)
            return message.channel.send(
                "You need to be in a voice channel to play music!"
            );
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
            return message.channel.send(
                "I need the permissions to join and speak in your voice channel!"
            );
        }
    
        const songInfo = await ytdl.getInfo(args[1]);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url
        };
    
        if (!serverQueue) {
            const queueContruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
    
            queue.set(message.guild.id, queueContruct);
    
            queueContruct.songs.push(song);
    
            try {
                var connection = await voiceChannel.join();
                queueContruct.connection = connection;
                play(message.guild, queueContruct.songs[0]);
            } catch (err) {
                console.log(err);
                queue.delete(message.guild.id);
                return message.channel.send(err);
            }
        } else {
            serverQueue.songs.push(song);
            return message.channel.send(`${song.title} has been added to the queue!`);
        }
    }
    
    function skip(message, serverQueue, args) {
        if (!message.member.voice.channel)
            return message.channel.send(
                "You have to be in a voice channel to stop the music!"
            );
        if (!serverQueue)
            return message.channel.send("There is no song that I could skip!");
        serverQueue.connection.dispatcher.end();
    }
    
    function stop(message, serverQueue, args) {
        if (!message.member.voice.channel)
            return message.channel.send(
                "You have to be in a voice channel to stop the music!"
            );
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }
    
    function pause(message, serverQueue, args) {
        if (!message.member.voice.channel)
            return message.channel.send(
                "You have to be in a voice channel to stop the music!"
            );
        if (serverQueue.connection.dispatcher.paused) {
            serverQueue.connection.dispatcher.resume();
        } else {
            serverQueue.songs = [];
            serverQueue.connection.dispatcher.pause();
        }
    }
    
    function play(guild, song) {
        const serverQueue = queue.get(guild.id);
        if (!song) {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }
    
        const dispatcher = serverQueue.connection
            .play(ytdl(song.url))
            .on("finish", () => {
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
            })
            .on("error", error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        serverQueue.textChannel.send(`Start playing: **${song.title}**`);
    }
    





bot.login(process.env.TOKEN);