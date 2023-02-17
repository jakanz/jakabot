module.exports = {
    name: 'punch',
    description: "Pow, bitch!",
    execute(message){
        if (!message.mentions.users.first()){ // No argument (mentioned user) given or not a mention
            message.channel.send(`${message.author.toString()} didn't mention a user correctly, so they took a throw at some empty air.`)}            
        else if (message.mentions.users.first()){
            if (message.mentions.users.first() == message.author.id){ // If the message author mentions themselves
                message.channel.send(`${message.author.toString()} is such a idiot they punched themselves into an unrecoverable vegetative state! Nice going.`)}
            else if (message.mentions.users.first() !== message.author.id){ // If the message author's ID is not the mentioned user
                if (message.mentions.users.first() == 740950646760407082){ // If mentioned user is the bot
                    message.reply("Why are you hitting me? Meanie. :(")}
                else { // If it isn't the bot or the author, then it must be another user
                    const mentionUser = message.mentions.users.first().id // ID of mentioned user to const
                    message.channel.send(`${message.author.toString()} just fucking w-w-**WHACKED** <@${mentionUser}>! :punch::boom:`) }}}}} 
                    
                    // TODO: add punch gif embed and randomize punch message