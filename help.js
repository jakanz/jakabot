const cmdRsrc = require('../json/cmdRsrc.json')
module.exports = {
    name: 'help',
    description: "help",
    execute(message, args){
        const hexColorPick = cmdRsrc.hexColors[Math.floor(Math.random() * cmdRsrc.hexColors.length)]
        message.channel.send(`**${message.author.toString()}** - I've DM'd you a command list!`);
        message.author.send({embed: {
            color: hexColorPick,
            title: "You requested help. Well, it's here!",
            description: "Thank you for allowing me to assist you! I greatly appreciate it. Here are some items that may help you in find what you need:",
            fields: [{
                name: "*** __-- Commands --__ ***",
                value: `W.I.P.`
                },
                {
                name: "*** __-- Command Prefix --__ ***",
                value: "The prefix is j!. Note that there can be a space after the prefix and the command can work just fine."
                },
                {
                name: "*** __-- Why was this bot made? --__ ***",
                value: "This was originally made as a joke among me and some friends. I don't really hope to make this public, but feel free to share. I don't really care."
                },
                {
                name: "*** __-- How come some commands are buggy? Why isn't the help page updated? --__ ***",
                value: "The bot is currently in a very developmental and experimental stage at the moment so bugs will be squashed while I make more commands and generally add more to the bot as time goes on. I'm hoping to complete the bot by the end of next year, although due to the lack of maintaining time, therefore bugs are most likely to remain for a while."
                }
            ],
            timestamp: new Date
        }});
    }
}