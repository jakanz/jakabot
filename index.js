const fs = require('fs')
const Discord = require('discord.js')
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
    intents: [  GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.MessageContent ],
    partials: [ Partials.Channel,
                Partials.Message,
                Partials.Reaction ] });
const config = require('./json/config.json')
const cmdRsrc = require('./json/cmdRsrc.json')

client.login(config.token) 
client.on('ready',() => {
    console.log(`Successful boot. [${process.uptime()}]`)
    client.user.setActivity('Booting...')
    setInterval(() => {
        const status = cmdRsrc.randomStatus[Math.floor(Math.random() * cmdRsrc.randomStatus.length)]
        client.user.setActivity(status);},30000)
    thesePplAreCute() })

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
    try {client.commands.get(command).execute(message,args)}
    catch (error) {
        if (!cmdRsrc.commandList.includes(command)){message.reply('**That command does not exist** - please use j!help or /help *(slash command)* for information.')}
        else{console.error(error); message.reply('There was an error executing that command. (Contact the developer [jakanz#6969] and have them check the console logs.)')}} })

function thesePplAreCute() {
    rating = Math.floor(Math.random() * 1000)
    client.channels.cache.get('1117547210188521482').send(`<@887114137459634199> is looking cute today with a rating of ${rating}/${rating}!`)
    client.channels.cache.get('1117546620200964166').send(`<@252894764154748928> is looking cute today with a rating of ${rating}/${rating}!`)
    client.channels.cache.get('1117547231499796572').send(`<@862451206421086269> is looking cute today with a rating of ${rating}/${rating}!`)
}