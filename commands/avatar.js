const { EmbedBuilder } = require("discord.js")
module.exports = {
    name: 'avatar',
    description: "Grab the avatar of a user",
    execute(message){
        const user = message.mentions.users.first() || message.author
        const avatarEmbed = new EmbedBuilder()
            .setColor("Random")
            .setTitle(`${user.tag}'s avatar`)
            .setImage(user.displayAvatarURL({dynamic:true}))
            .setFooter({text:`Avatar requested by ${message.author.tag}`, embeds:message.author.displayAvatarURL({dynamic:true})})
        
        if      (!message.mentions.users.first()){message.reply({content:"You didn't mention a user, so I defaulted to grab your avatar.",embeds:[avatarEmbed]})}
        else if (message.mentions.users.first() == 740950646760407082){message.reply({content:`Aww... do you have a lil crush on me, ${message.author.username}? :relaxed:`,embeds:[avatarEmbed]})}
        else    {message.reply({embeds:[avatarEmbed]})} }}