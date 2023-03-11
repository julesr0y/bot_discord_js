const Discord = require("discord.js");

module.exports = {
    name: "isen",
    description: "All is digital (ouais ouais)",
    permission: "Aucune",
    dm: true,

    async run(bot, message){
        await message.reply("https://cdn.discordapp.com/attachments/1050367301716811846/1084135280715501678/image0.gif");
    }
}