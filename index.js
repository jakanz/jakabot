const Discord = require('discord.js'); // Grabs Discord node.js module
const fs = require('fs'); // Grabs file system necessary for reading commands
const client = new Discord.Client();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); // Reads folder for JS files
const config = require('./json/config.json') // Retreives configuration for commands via file
const cmdRsrc = require('./json/cmdRsrc.json') // Retreives resources for commands via file

client.login(config.token) // Retreive bot login token from config.json
client.on('ready', (async) => {
    console.log('k its online now do some shit'); // Confirm successful bootup

    client.user.setActivity('currently booting...')
    setInterval(() => {
        const status = cmdRsrc.randomStatus[Math.floor(Math.random() * cmdRsrc.randomStatus.length)] // Select random status from status array json
        client.user.setActivity(status);},10000) // Set random Discord status every 10000ms (10 seconds)
    }
)

// Retreive command through file
client.commands = new Discord.Collection();
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return; // If message does not contain the command prefix or if the message is written by the bot, ignore
    const args = message.content.slice(config.prefix.length).split(/ +/); // Slice off the space
    const command = args.shift().toLowerCase(); // If command has uppercase, shift whole command to lowercase

    const commandList = ["help", "meme", "punch", "socials"] // TODO: Add list to cmdRsrc.json
    if (commandList.includes(command)) { // If a command from commandList is used (with prefix), execute command from file
        client.commands.get(command).execute(message,args);
        }
    }
)