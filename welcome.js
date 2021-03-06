module.exports = (client) => {
    const channelId = "817421806076035072";
    Client.on("guildMemberAdd", (member) => {
      console.log(member);
  
      const message = `Welcome <@${
        member.id
      }> to our server! Be sure to check out our ${member.guild.channels.cache
        .toString()}`;
  
      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    });
  };
