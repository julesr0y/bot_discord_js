const Discord = require("discord.js");

module.exports = {
    name: "junia",
    description: "Parce que c'est la grande école des transitions",
    permission: "Aucune",
    dm: true,

    async run(bot, message){

        await message.reply("https://tenor.com/view/junia-lille-bordeaux-futur-d%C3%A9sirable-%C3%A9cole-gif-25577786");
    }
}