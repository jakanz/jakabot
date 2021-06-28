const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'help',
    description: "help",
    execute(message, args){
        var hexColors = ['cc2323', 'c70039', '581845', '23cc35', '23cc60', '12e85f', '12e8e2', '128de8', '194de1', '3519e1', '5019e1', '8619e1', 'a119e1', 'e1194a', 'e11932', 'ff5500', 'ffa600', 'ffcd00']
        const randomChooser = hexColors[Math.floor(Math.random() * hexColors.length)]
        message.channel.send(`**${message.author.toString()}** - I've DM'd you a command list!`);
        message.author.send({embed: {
            color: randomChooser,
            title: "You requested help. Well, it's here!",
            description: "Thank you for allowing me to assist you! I greatly appreciate it. Here are some items that may help you in find what you need:",
            fields: [{
                name: "*** __-- Commands --__ ***",
                value: `*General*
                **socials** Lists all of jaka's socials.

                *Fun*
                **secs** You got bamboozled by the sex command, so you have come here to find out how to achieve comedy.
                **sex** Find out for yourself. ;)`
                },
                {
                name: "*** __-- Command Prefix --__ ***",
                value: "The prefix is j!. Note that there shouldn't be a space after the prefix so the command can work."
                },
                {
                name: "*** __-- Why was this bot made? --__ ***",
                value: "This was originally made as a joke among me and some friends. I don't really hope to make this public, but feel free to share. I don't really care."
                },
                {
                name: "*** __-- How come some commands are buggy? Why isn't the help page updated? --__ ***",
                value: "The bot is currently in a very developmental and experimental stage at the moment so bugs will be squashed while I make more commands and generally add more to the bot as time goes on. I'm hoping to complete the bot by the end of next year, although I am not good at maintaining a schedule, therefore bugs are most likely to remain for a while."
                }
            ],
            timestamp: new Date
        }});
    }
}