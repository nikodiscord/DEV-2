const Discord = require("discord.js");

exports.run = async (bot, message, args) =>{

    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("O comandos de status foi ativado!")

    for (i=0; i<10;){
        await sleep(90000)
        bot.user.setActivity(`${bot.users.size} Usuários`, {type: 'STREAMING', url: 'https://twitch.tv/Niko'}) //define é mostra quantos usuários que o bot tem
        await sleep(60000)
        bot.user.setActivity(`QUALQUER COISA`, {type: 'STREAMING', url: 'https://twitch.tv/Niko'})
        await sleep(60000)
        bot.user.setActivity(`OLÁ CLIENT DEV NIKO`, {type: 'STREAMING', url: 'https://twitch.tv/Niko'})
        await sleep(60000)
        bot.user.setActivity(`DALEE`, {type: 'STREAMING', url: 'https://twitch.tv/Niko'})
        await sleep(80000)
        bot.user.setActivity(`NHAW NHAW`, {type: 'STREAMING', url: 'https://twitch.tv/Niko'})
        await sleep(80000)
        bot.user.setActivity(`Para ${bot.guilds.size} Servidores!`, {type: 'STREAMING', url: 'https://twitch.tv/Niko'}) //define é mostra quantidade de servidores em que o bot está

        }
}    
module.exports.help = {
name: "status"
}