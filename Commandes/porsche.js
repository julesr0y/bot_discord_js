const Discord = require("discord.js");

module.exports = {
    name: "porsche",
    description: "Affiche la porsche volante",
    permission: "Aucune",
    dm: true,

    async run(bot, message){
        await message.reply("https://tenor.com/view/mercedes-benz-gt1-flip-mbgt1-gif-16074600");
    }
}