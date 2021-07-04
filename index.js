const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const config = require('./json/config.json')
const cmdRsrc = require('./json/cmdRsrc.json')

client.login(config.token) // Retreive bot login token from Heroku config variables
client.on('ready', (async) => {
    console.log('k its online now do some shit yeah yeah'); // Confirm the bot's online

    client.user.setActivity('BOOTING UP...')
    setInterval(() => {
        const status = cmdRsrc.randomStatus[Math.floor(Math.random() * cmdRsrc.randomStatus.length)] // Select random status from status array
        client.user.setActivity(status);},10000) // Set random Discord status every 10000ms (10 seconds)
    }
)

client.commands = new Discord.Collection();
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return; // If message does not contain the command prefix or if the message is written by the bot, ignore
    const args = message.content.slice(config.prefix.length).split(/ +/); // Slice off the space for bot to understand command (?)
    const command = args.shift().toLowerCase(); // If command has uppercase, shift whole command to lowercase

    const commandList = ["help", "meme", "punch", "socials"]
    if (commandList.includes(command)) { // If a command from commandList is used (with prefix), execute command from file
        client.commands.get(command).execute(message,args);
        }
    }
)