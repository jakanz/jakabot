const Discord = require('discord.js');

const fs = require('fs');
const client = new Discord.Client();
const commandPrefix = 'j!';
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

client.login(process.env.BOT_TOKEN); // Retreive bot login token from Heroku config variables
client.on('ready', (async) => {
    console.log('k its online now do some shit yeah yeah'); // Confirm the bot's online

    // Set random Discord status every 10000ms (10 seconds)
    setInterval(() => {
        const randomStatus = [JSON.parse(randomStatus)]
        const status = randomStatus[Math.floor(Math.random() * randomStatus.length)]
        client.user.setActivity(status);
    },10000)
})

client.commands = new Discord.Collection();
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(commandPrefix) || message.author.bot) return; // If message does not contain the command prefix or if the message is written by the bot, ignore

    const args = message.content.slice(commandPrefix.length).split(/ +/); // Slice off the space for bot to understand command (?)
    const command = args.shift().toLowerCase(); // If command has uppercase, shift whole command to lowercase

    const commandList = ["help", "socials", "meme", "sex"]
    if (Array.prototype.includes(command, commandList)) { // If a command from commandList is used (with prefix), execute command from file
        client.commands.get(command).execute(message,args);
        }
    }
)