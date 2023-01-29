const { Client, Events, GatewayIntentBits, REST, Routes } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
	],
});

const { token } = require('./config.json'); //non par contre je suis pas con j'ai pas upload le token du bot lol

client.once('ready', () => {
    console.log('la Descente a démarré avec succès'); //message en console
    client.user.setActivity("Vénérer le Saint-Alcool"); //message d'activité du bot
    client.user.setStatus('online'); //statut du bot, peut être: dnd, invisible, online, idle
});


client.on("messageCreate", message => {
    if (message.author.bot){ //si l'auteur du message est un bot, on ne fait rien
        return;
    }
    if (message.content.toLocaleLowerCase() === "ping") { //si le message est égal à ping
        message.channel.send("Pong");
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
        message.reply("Effectivement, ça pique"); //répondre au message
        message.react('🇫'); //réagir au message
        message.react('🇱');
        message.react('🇴');
        message.react('🇵');
    }
    if (message.content.toLocaleLowerCase() === "quoi") {
        message.channel.send("feur");
    }
    if (message.content.toLocaleLowerCase() === "tiens voila quelqu'un") {
        message.channel.send("https://tenor.com/view/petit-ours-brun-au-revoir-xaamo-sitrox-gif-19614967");
    }
    if (message.content.toLocaleLowerCase() === "sus") {
        message.channel.send("https://tenor.com/view/the-rock-sus-the-rock-meme-the-rock-sus-meme-gif-23972805");
    }
    if ((message.content.toLocaleLowerCase().includes("suu")) || (message.content.toLocaleLowerCase().includes("siuu"))) {
        message.channel.send("https://tenor.com/view/siu-ronaldo-siu-cristiano-cristiano-ronaldo-siu-meme-gif-24574747");
    }
    if (message.content.toLocaleLowerCase() === "$porsche") {
        message.channel.send("https://tenor.com/view/mercedes-benz-gt1-flip-mbgt1-gif-16074600");
    }
    if (message.content.toLocaleLowerCase() === "$motoneige") {
        message.channel.send("Vroumm\nhttps://clement.tassin.go.yo.fr/youpi/index.html");
    }
    if (message.content.toLocaleLowerCase() === "$tg") {
        message.channel.send("https://tenor.com/view/vilbrequin-ta-gueule-shut-up-rage-gif-17486959");
    }
    if (message.content.toLocaleLowerCase() === "$jaifaim") {
        message.channel.send("Une petite faim ?\nhttps://maisonisen.fr/index.php");
    }
    if (message.content.toLocaleLowerCase() === "$jaisoif") {
        message.channel.send("Nous y voilà\nhttps://ladescente.alwaysdata.net/");
    }
    if (message.content.toLocaleLowerCase() === "$aide") {
        message.channel.send("Voici les commandes disponibles :\n$motoneige : Affiche le lien de Sussy Tracker\n$jaisoif : Affiche le lien du site de La Descente\n$jaifaim : Affiche le lien du site de la maison ISEN\n$porsche : Affiche la Porsche qui vole\n$aide : Affiche les commandes disponibles\nratio: Pour ratio\nflop: Pour flop\nsuu ou siuu: Pour te prendre pour CR7");
    }
});

client.login(token);