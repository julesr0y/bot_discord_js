const Discord = require("discord.js");

module.exports = {
    name: "jaisoif",
    description: "Affiche La Descente",
    permission: "Aucune",
    dm: true,

    async run(bot, message){
        await message.reply("Une petite soif ?\nhttps://ladescente.alwaysdata.net/templates/accueil_presentation.php");
    }
}