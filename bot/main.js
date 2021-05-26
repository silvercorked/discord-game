const Discord = require('discord.js')

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.login(/* This is where I'd put my private key - IF I HAD ONE */)
