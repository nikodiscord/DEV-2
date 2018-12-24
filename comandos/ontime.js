const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

exports.run = (bot, message, args) => {
    let duration = moment.duration(bot.uptime).format('D [d], H [h], m [m], s [s]');
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

    message.channel.send(`**${nomeeapelido}**,estou online à: **${duration}**`);
}
exports.help = {
    name: "ontime"
}
//packpage que precisa baixar.
//npm i moment
//nnpm i moment-duration-format