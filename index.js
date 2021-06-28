const Discord = require('discord.js');

const fs = require('fs');
const client = new Discord.Client();
const commandPrefix = 'j!';
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

client.login('NzQwOTUwNjQ2NzYwNDA3MDgy.XyweEA.Ob16aHeh3DN42kHfATgeMpfgP20');
client.on('ready', (async) => {
    console.log('k its online now do some shit yeah yeah');

    let randomStatus = ["with big tiddies | j!help","with fatty cocks | j!help","with your mom xdd | j!help","with funny ducks | j!help"]
    let status = randomStatus[Math.floor(Math.random() * randomStatus.length)]
    client.user.setActivity(status,{});
    }
)

client.commands = new Discord.Collection();
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(commandPrefix) || message.author.bot) return;

    const args = message.content.slice(commandPrefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

        // General
        if (command == 'help'){
            client.commands.get("help").execute(message,args);
        } else if (command == 'socials'){
            client.commands.get("socials").execute(message,args);
        } 
        // Fun
        else if (command == 'meme'){
            client.commands.get("meme").execute(message,args);
        } else if (command == 'sex'){
            client.commands.get("sex").execute(message,args);
        }
    }
)