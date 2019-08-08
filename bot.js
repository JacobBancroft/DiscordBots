const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "process.env.token";
const embed = new Discord.RichEmbed()
.setTitle('Imperial Intelligence Bot')
.setColor('#00FFFF')
.setThumbnail('https://t7.rbxcdn.com/81ad229461d121c9855cf62f7392f8d0')
.setFooter('Made by Seorsum | Seorsum#9883')
.addField('Report Log Format:', 'NOF://\n NOF-Rank://\n Infractions-broke://\nProof://\nWitnesses://\nNotes://')
.addField('Example:', '(you can abbreviate)\n NOF-Name of Offender\nWitnesses field is optional.')
.setImage('https://cdn.discordapp.com/attachments/597222115309256705/598938927000453139/8071609769e6992db896ffcbdd52bcb1.png');
bot.on("message", (message) => {
    if (message.content.startsWith("ping")) {
      message.channel.send(embed);
    }
});

bot.login(token);

