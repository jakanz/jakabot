const client = require('discord.js')
module.exports = {
    name: 'punch',
    description: "pow !!",
    execute(message, args){
        if (args[0]){
            if (message.author.id == message.mentions.users.first()){
                message.channel.send(`${message.author.toString()} is such a retard they punched themselves into an unrecoverable vegetative state!`)
                return
            } if (message.author.id !== message.mentions.users.first()){
                if (message.mentions.users.first() == 740950646760407082){
                    message.channel.send(`${message.author.toString()} Don't fucking hit me, asshole! Allow me to debug my components, now that you've mangled all the wires you daft cunt.`)
                    return
                } else {
                    const mentionUser = message.mentions.members.first().id
                    message.channel.send(`${message.author.toString()} just fucking w-w-**WHACKED** <@${mentionUser}>! :punch::boom:`)
                    return
                }
            } 
        } if (!args[0]) {
            message.channel.send(`${message.author.toString()} forgot to mention a user, so they took a throw at some empty air.`)
            return
        }
}}
