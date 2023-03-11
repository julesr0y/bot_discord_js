const Discord = require("discord.js");
const loadSlashCommands = require("../Loaders/loadSlashCommands")

module.exports = async bot => {
    bot.user.setActivity("Vénérer le Saint-Alcool"); //message d'activité du bot
    bot.user.setStatus('online'); //statut du bot, peut être: dnd, invisible, online, idle
    await loadSlashCommands(bot)
    console.log(`${bot.user.tag} est en ligne`)
}