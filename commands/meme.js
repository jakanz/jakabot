const fs = require('fs')
const { Client, Message } = require("discord.js")
module.exports = {
    name: 'meme',
    description: "Funny memes, because what is a bot without fun?",
    execute(message, args){
        // Retrieve memes from files
        const memeImg = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/meme/M_img')
        const memeGif = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/meme/M_gif')
        const memeVid = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/meme/M_vid')
        
        switch (args[0]){
            case 'img':
                let imgChoose = memeImg[Math.floor(Math.random()*memeImg.length)]
                message.channel.send({files:[`./media/M_img/${imgChoose}`]})
                break;
            case 'gif':
                let gifChoose = memeGif[Math.floor(Math.random()*memeGif.length)]
                message.channel.send({files:[`./media/M_gif/${gifChoose}`]})
                break;
            case 'vid':
                let vidChoose = memeVid[Math.floor(Math.random()*memeVid.length)]
                message.channel.send({files:[`./media/M_vid/${vidChoose}`]})
                break;
            default:
                let imgDefault = memeImg[Math.floor(Math.random()*memeImg.length)]
                message.channel.send("You did not specify your preferred meme (or you simply misspelled the argument), so I defaulted to send an image. For further reference, the arguments for my meme command are `gif`, `img`, and `vid`.", {files:[`./media/M_img/${imgDefault}`]})
                break;
        }
    }
}