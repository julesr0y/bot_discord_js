const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({intents});
const loadCommands = require("./Loaders/loadCommands");
const loadEvents = require("./Loaders/loadEvents");
const config = require("./config");

bot.commands = new Discord.Collection();

bot.login(config.token); //démarrage du bot
loadCommands(bot);
loadEvents(bot);

bot.on("messageCreate", message => {
    if (message.author.bot){ //si l'auteur du message est un bot, on ne fait rien
        return;
    }
    if (message.content.toLocaleLowerCase() === "ratio") { //si le message est égal à ratio
        message.reply("D'accord"); //répondre au message
        message.react('🇷'); //réagir au message
        message.react('🇦');
        message.react('🇹');
        message.react('🇮');
        message.react('🇴');
    }
    if (message.content.toLocaleLowerCase() === "flop") { //si le message est égal à flop
        message.reply("Comment ça mon reuf ?"); //répondre au message
        message.react('🇫'); //réagir au message
        message.react('🇱');
        message.react('🇴');
        message.react('🇵');
    }
    if (message.content.toLocaleLowerCase() === "quoi") {
        message.channel.send("feur");
    }
    if (message.content.toLocaleLowerCase() === "sus") {
        message.channel.send("https://tenor.com/view/the-rock-sus-the-rock-meme-the-rock-sus-meme-gif-23972805");
    }
    if (message.content.toLocaleLowerCase() === "noice") {
        message.channel.send("https://tenor.com/view/noice-nice-click-gif-8843762");
    }
    if ((message.content.toLocaleLowerCase().includes("suu")) || (message.content.toLocaleLowerCase().includes("siuu"))) {
        message.channel.send("https://tenor.com/view/siu-ronaldo-siu-cristiano-cristiano-ronaldo-siu-meme-gif-24574747");
    }
});