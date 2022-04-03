const { Client, Message } = require("discord.js")
module.exports = {
    name: 'punch',
    description: "pow !!",
    execute(message, args){
        if (args[0]){
            if (message.author.id == message.mentions.users.first()){ // If the message author mentions themselves
                message.channel.send(`${message.author.toString()} is such a retard they punched themselves into an unrecoverable vegetative state! Nice going, Terri Schiavo.`)
                return
            } else if (message.author.id !== message.mentions.users.first()){ // If the message author's ID does not equal mentioned user
                if (message.mentions.users.first() == 740950646760407082){ // If mentioned user is the bot
                    message.channel.send(`${message.author.toString()} Don't fucking hit me, asshole! Allow me to debug my components, now that you've mangled all the wires you daft cunt.`)
                    return
                } else { // If it isn't the bot or the author, then it must be another user
                    const mentionUser = message.mentions.members.first().id // ID of mentioned user to variable
                    message.channel.send(`${message.author.toString()} just fucking w-w-**WHACKED** <@${mentionUser}>! :punch::boom:`)
                    return
                }
            } 
        } else { // No argument (mentioned user) given
            message.channel.send(`${message.author.toString()} forgot to mention a user, so they took a throw at some empty air.`)
            return
        }
}}
