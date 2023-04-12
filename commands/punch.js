module.exports = {
    name: 'punch',
    description: "pow",
    execute(message, args){
        if (!args[0])                                                                           {message.channel.send(`${message.author.toString()} didn't mention a user correctly, so they took a throw at some empty air.\n*(Hint: you must directly mention a user in order to use the command - the bot cannot mention unmentionable users!)*`)}          
        else if (message.mentions.users.first() == message.author.id)                           {message.channel.send(`${message.author.toString()} is such a idiot they punched themselves into an unrecoverable vegetative state! Nice going.`)}
        else if (message.mentions.users.first() == 740950646760407082)                          {message.reply("Why are you hitting me? Meanie. :(")}
        else if (message.mentions.users.first() !== (message.author.id || 740950646760407082))  {message.channel.send(`${message.author.toString()} just fucking w-w-**WHACKED** <@${message.mentions.users.first().id}>! :punch::boom:`) }
        else                                                                                    {message.reply("I don't know how you managed to break this command. Please, if you will, create a new issue on the bot's GitHub repository: https://github.com/jakanz/jakabot")}
        // TODO: add punch gif embed and randomize punch message
    }
}