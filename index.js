const Discord = require('discord.js');

const fs = require('fs');
const client = new Discord.Client();
const commandPrefix = 'j!';
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

client.login('NzQwOTUwNjQ2NzYwNDA3MDgy.XyweEA.Ob16aHeh3DN42kHfATgeMpfgP20');
client.on('ready', (async) => {
    console.log('k its online now do some shit yeah yeah');
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

    // general
    switch (command){
        // general
        case "help":
            client.commands.get("help").execute(message,args);
            break;
        case "socials":
            client.commands.get("socials").execute(message,args);
            break;
            // fun
        case "secs":
            client.commands.get("secs").execute(message,args);
            break;
        case "sex":
            client.commands.get("sex").execute(message,args);
            break;
        case "hentai":
            client.commands.get("hentai").execute(message,args);
            break;
    }
})