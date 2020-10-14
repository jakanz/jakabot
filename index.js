// Const variables for bot
const Discord = require('discord.js');
const client = new Discord.Client();

// Login
client.login(process.env.JAKA_TOKEN);

// Prefix for bot commands
const prefix = 'j!';

// Successful login message
client.on('ready', () => {
    console.log('"jaka-bot!!~" is now online!');

    var spamChannel = client.channels.cache.get('763946037169225728');
    setInterval(() => {
        spamChannel.send("||<@723132701791485962>|| dm jaka if i stop, even if he's offline");
    }, 1);
})

// Bot commands!
client.on('message', message => {
    // If the message content does not start with the prefix or the message author is the bot, ignore.
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    // Const variables for commands
    const args = message.content.slice(prefix.Length).split(" ");
    const command = args.shift().toLowerCase();

    // Social medias!

})