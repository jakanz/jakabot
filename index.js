const Discord = require('discord.js')
const { Client, Collection, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES] })
const config = require('./json/config.json')
const cmdRsrc = require('./json/cmdRsrc.json')
const fs = require('fs')

client.login(config.token) 
client.on('ready',() => {
    console.log('Successful boot. [ ' + process.uptime() + ' ]')
    client.user.setActivity('Booting...')
    setInterval(() => {
        const status = cmdRsrc.randomStatus[Math.floor(Math.random() * cmdRsrc.randomStatus.length)]
        client.user.setActivity(status);},30000) })

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
client.commands = new Discord.Collection()
for(const file of commandFiles){
    const commandName = file.split('.')[0]
    const command = require(`./commands/${file}`)
    client.commands.set(commandName, command) }

client.on('messageCreate', message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return
    const args = message.content.slice(config.prefix.length).split(/ +/)
    const command = args.shift().toLowerCase() 
    if (cmdRsrc.commandList.includes(command)) { 
        client.commands.get(command).execute(message,args) }})