const Discord = require("discord.js");

module.exports = {
    name: "tg",
    description: "Quand quelqu'un parle trop",
    permission: "Aucune",
    dm: true,

    async run(bot, message){
        await message.reply("https://tenor.com/view/vilbrequin-ta-gueule-shut-up-rage-gif-17486959");
    }
}