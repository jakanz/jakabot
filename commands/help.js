const cmdRsrc = require('../json/cmdRsrc.json') // Retrieve cmdRsrc
module.exports = {
    name: 'help',
    description: "help",
    execute(message, args){
        message.reply('A message has been sent to you via DMs with some information!');

        // Pick sidebar color
        let hexColor = cmdRsrc.hexColors[Math.floor(Math.random() * cmdRsrc.hexColors.length)] // Pick color from cmdRsrc
        message.author.send({embed: {
            color: hexColor,
            title: "Is that someone in need of help I hear?",
            description: "Thank you for allowing me to assist you! I greatly appreciate it. Here are some items that may help you in find what you need:",
            fields: [{
                name: "**__Commands__**",
                value: `W.I.P.`
                },
                {
                name: "**__Command Prefix__**",
                value: "The prefix is j!. Note that there can be a space after the prefix and the command can work just fine."
                },
                {
                name: "**__Why was this bot made?__**",
                value: "This was originally made as a joke among me and some friends. I don't really hope to make this public, but feel free to share. I don't really care."
                },
                {
                name: "**__How come some commands are buggy? Why isn't the help page updated?__**",
                value: "The bot is in a very early stage right now so I don't expect to finish the bot anytime soon, so bugs will be fixed as time goes on."
                }
            ],
            timestamp: new Date
        }});
    }
}