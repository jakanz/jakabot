const fs = require('fs')
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES] })
module.exports = () => {
    // Sift through folder for command files
    const commandFiles = fs.readdirSync(`C:/Users/freem/Desktop/media/projects/jakabot/commands`)
        .filter(file => file.endsWith(`.js`))
    
    // Prepare for command usage 
    client.commands = new Discord.Collection()
    for(const file of commandFiles){
        const command = require(`C:/Users/freem/Desktop/media/projects/jakabot/commands/${file}`)
        if(command.name){client.commands.set(command.name, command)}
        else{continue} }}