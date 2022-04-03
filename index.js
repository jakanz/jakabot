// Dependencies
const Discord = require('discord.js') // Retrieve discord.js library
const { Client, Intents } = require('discord.js') // Retreive client
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES] }) // State intents

// JSON files
const config = require('./json/config.json') // Retrieve config for settings
const cmdRsrc = require('./json/cmdRsrc.json') // Retrieve command resources

// File system dependency
const fs = require('fs') // Retrieve file system
const commandFiles = fs.readdirSync('./commands/') // Get files for command execution
    .filter(file => file.endsWith('.js')) // Retrieve JavaScript commands

// Bot login
client.login(config.token) // Retreive token from config.json
client.on('ready', (async) => {
    console.log('Successfully started bot.\nBoot time: [ ' + process.uptime() + ' ]') // Confirm successful boot via terminal

    client.user.setActivity('Fresh boot, please be patient...') // Set bot activity status
    setInterval(() => {
        const status = cmdRsrc.randomStatus[Math.floor(Math.random() * cmdRsrc.randomStatus.length)] // Select random status from resource
        client.user.setActivity(status);},30000) // Set random Discord status every 30000ms (30 seconds)
    }
)

// Prepare for command usage 
client.commands = new Discord.Collection()
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

// Executing commands
client.on('messageCreate', message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return // Message does not contain command prefix or message is written by bot, ignore

    const args = message.content.slice(config.prefix.length).split(/ +/) // Slice off the space for bot to understand command
    const command = args.shift().toLowerCase() // If command has uppercase, shift whole command to lowercase

    if (cmdRsrc.commandList.includes(command)) { // If a command from commandList is used (with prefix), execute
        client.commands.get(command).execute(message,args) // Execute command
        }
    }
)