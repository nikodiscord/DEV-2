const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    let embed = new Discord.RichEmbed()

    .setTitle("Meu ping!")
    .setColor("#00c4eb")
    .setDescription(`**Meu ping é de** ${Math.round(bot.ping)}ms!`)
    .setFooter(`Comando de ping`, bot.user.displayAvatarURL);

    message.channel.send(embed);
}

exports.help = {
	name: "ping"
}

//AVISO PARA ABRIR A CMD NA PASTA , APERTE E SEGURE SHIFT + APERTA O LADO DIRETO DO MOUSE
//IRÁ APARECER A OPÇÃO ABRIR CMD OU ABRIR JANELA DE COMANDO AQUI