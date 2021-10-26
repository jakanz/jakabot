// Retrieve necessary bot parts
const Discord = require('discord.js') // Retrieve discord.js library
const fs = require('fs') // Retrieve file system
const client = new Discord.Client() // Retrieve client
const commandFiles = fs.readdirSync('./commands/') // Retreive commands --
    .filter(file => file.endsWith('.js')) // -- Filter for JavaScript files
const config = require('./json/config.json') // Retrieve config for settings
const cmdRsrc = require('./json/cmdRsrc.json') // Retrieve command resources

// Bot login
client.login(config.token) // Retreive login token from config.json
client.on('ready', (async) => {
    console.log('k its online now do some shit yeah yeah'); // Confirm successful boot via terminal

    client.user.setActivity('Currently booting--') // Setting bot activity status
    setInterval(() => {
        const status = cmdRsrc.randomStatus[Math.floor(Math.random() * cmdRsrc.randomStatus.length)] // Select random status from resource
        client.user.setActivity(status);},10000) // Set random Discord status every 10000ms (10 seconds)
    }
)

// Prepare for command usage 
client.commands = new Discord.Collection();
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Executing commands
client.on('message', message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return; // Message does not contain command prefix or message is written by bot, ignore

    const args = message.content.slice(config.prefix.length).split(/ +/); // Slice off the space for bot to understand command
    const command = args.shift().toLowerCase(); // If command has uppercase, shift whole command to lowercase

    if (cmdRsrc.commandList.includes(command)) { // If a command from commandList is used (with prefix), execute
        client.commands.get(command).execute(message,args); // Execute command
        }
    }
)