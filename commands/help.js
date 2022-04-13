const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'help',
    description: "Ask me for help. I won't mind. :)",
    execute(message){
        message.reply("Check your direct messages - I've messaged you with some information you may find useful!")

        const helpEmbed = new MessageEmbed() // TODO: Add context menu for commands and other categories
            .setColor("RANDOM") // "RANDOM" is a built-in Discord.js function, doesn't print text
            .setTitle("Is that someone in need of help I hear?")
            .setDescription("Thank you for allowing me to assist you! I greatly appreciate it. Here are some items that may help you in find what you need:")
            .setTimestamp()
            .addFields(
                { name: "**__Commands__**", value: `W.I.P.`},
                { name: "**__Command Prefix__**", value: "The prefix is j!. Note that there can be a space after the prefix and the command can work just fine."},
                { name: "**__Why was this bot made?__**", value: "This was originally made as a joke among me and some friends. I don't really hope to make this public, but feel free to share. I don't really care."},
                { name: "**__How come some commands are buggy? Why isn't the help page updated?__**", value: "The bot is in a very early stage right now so I don't expect to finish the bot anytime soon, so bugs will be fixed as time goes on."},)
        message.author.send({embeds: [helpEmbed]}) }}