const Discord = require('discord.js') // Retrieve discord.js library
const config = require(`./json/config.json`)
const { Client, Intents } = require('discord.js') // Retreive client
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES] })

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['commandhandler','eventhandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client.Discord) })

client.login(config.token) // Bot login with token from config.json