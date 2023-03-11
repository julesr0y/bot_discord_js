const Discord = require("discord.js");

module.exports = {
    name: "commentcamarche",
    description: "Affiche les commandes disponibles",
    permission: "Aucune",
    dm: true,

    async run(bot, message){
        await message.reply("**Voici les commandes disponibles :**\n/jaisoif : Affiche le lien du site de La Descente\n/jaifaim : Affiche le lien du site de la maison ISEN\n/junia : La grande école des TRANSITIONS\n/isen : C'est l'ISEN mgl\n/porsche : Affiche la Porsche qui vole\n/tg : Quand quelqu'un parle trop\n/commentcamarche : Affiche les commandes disponibles\n**Mots clés :**\nratio : Pour ratio\nflop : Pour flop\nsuu ou siuu : Pour faire apparaitre CR7\nsus : sus\nnoice : noice");
    }
}