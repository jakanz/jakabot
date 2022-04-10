const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'avatar',
    description: "Grab the avatar of a user",
    execute(message){
        const user = message.mentions.users.first() || message.author
        const avatarEmbed = new MessageEmbed() // Create embed for avatar
            .setColor("RANDOM") // "RANDOM" is a built-in Discord.js function, doesn't print text
            .setTitle(`${user.tag}'s avatar`)
            .setImage(user.displayAvatarURL({dynamic:true}))
            .setFooter({text:`Avatar requested by ${message.author.tag}`, embeds:message.author.displayAvatarURL({dynamic:true})})
        
        if(!message.mentions.users.first()){message.reply({content:"You didn't mention a user, so I defaulted to grab your avatar.",embeds:[avatarEmbed]})}
        else {message.reply({embeds:[avatarEmbed]})} }}