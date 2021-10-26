const client = require('discord.js') // Retrieve discord.js library
module.exports = {
    name: 'punch',
    description: "pow !!",
    execute(message, args){
        if (args[0]){
            if (message.author.id == message.mentions.users.first()){ // If the message author mentions themselves
                message.reply(`You're such a retard you struck yourself into an unrecoverable vegetative state!`)
                return
            } if (message.author.id !== message.mentions.users.first()){ // If the message author's ID does not equal mentioned user
                if (message.mentions.users.first() == 740950646760407082){ // If mentioned user = bot
                    message.reply(`Why do you think it's funny to strike an innocent bot trying to provide a free service? Jackass.`)
                    return
                } else { // If it isn't the bot or the author, then it must be another user
                    const mentionUser = message.mentions.members.first().id // ID of mentioned user to variable
                    message.reply(`You just fucking w-w-**WHACKED** <@${mentionUser}>! :punch::boom:`)
                    return
                }
            } 
        } else { // No argument (mentioned user) given
            message.reply(`You forgot to mention a user, so they took a throw at some empty air.`)
            return
        }
}}
