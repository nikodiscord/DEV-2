const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    if(message.channel.type === 'dm') return;
    var user = message.mentions.users.first();

    if (!user) user = message.author;

    var targetInvites = await message.guild.fetchInvites();

    var invitesUses = 0;

    targetInvites.forEach(invite => {
        if (invite.inviter.id === user.id) {
            invitesUses += invite.uses;
        }
    });

    var embed = new Discord.RichEmbed()
    .setThumbnail(user.displayAvatarURL)
    .addField("**• Membros Recrutados •**", `\`\`\`js\n(${invitesUses}) - Membros\`\`\``)
    .setColor("#00c4eb")
    .setFooter(`${user.tag}`)
    .setTimestamp();

    message.channel.send(embed);
}
module.exports.help = {
  name:"divulgador"
}