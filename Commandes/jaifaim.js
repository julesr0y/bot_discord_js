const Discord = require("discord.js");

module.exports = {
    name: "jaifaim",
    description: "Affiche le site de la MI",
    permission: "Aucune",
    dm: true,

    async run(bot, message){
        await message.reply("Une petite faim ?\nhttps://maisonisen.fr/");
    }
}