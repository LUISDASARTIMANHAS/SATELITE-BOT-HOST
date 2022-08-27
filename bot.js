const { Client, version } = require('discord.js');
const {token} = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} esta online agora!`);

    bot.user.setPresence({
        status: 'idle',
        activity: {
            name: "pingobras.glitch.me" + new Date().getFullYear(),
            type: "WATCHING",}})
       
})


bot.login(token)


