const { Client, version } = require('discord.js');
const {token} = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} esta online agora!`);
 setTimeout(  
    bot.user.setPresence({
        status: 'idle',
        activity: {
            name: "PINGOBRAS HOST.glitch.me",
            type: "WATCHING",}}),10000),
  setTimeout( 
        bot.user.setPresence({
        status: 'dnd',
        activity: {
            name: "SERVER HOST.glitch.me",
            type: "LISTENING",}}),15000)
  
  
})


bot.login(token)


