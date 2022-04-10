const fs = require('fs')
module.exports = {
    name: 'meme',
    description: "Funny memes, because what is a bot without fun?",
    execute(message, args){
        // Retrieve memes from files
        // TODO: Terrible way to do this! Add website implementation so file sending is much faster
        const memeGif = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/meme/gif')
        const memeImg = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/meme/img')
        const memeVid = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/meme/vid')
        
        switch (args[0]){
            case 'gif':
                let gifChoose = memeGif[Math.floor(Math.random()*memeGif.length)]
                message.channel.send({files:[`./media/meme/gif/${gifChoose}`]}); break
            case 'img':
                let imgChoose = memeImg[Math.floor(Math.random()*memeImg.length)]
                message.channel.send({files:[`./media/meme/img/${imgChoose}`]}); break
            case 'vid':
                let vidChoose = memeVid[Math.floor(Math.random()*memeVid.length)]
                message.channel.send({files:[`./media/meme/vid/${vidChoose}`]}); break
            default:
                let imgDefault = memeImg[Math.floor(Math.random()*memeImg.length)] // TODO: Add randomizer to determine img, gif, or vid usage
                message.channel.send({content:"You didn't specify your preferred meme (or you misspelled the argument), so I defaulted to send an image. For further reference, the arguments for memes are `img`, `gif`, and `vid`.",files:[`./media/meme/img/${imgDefault}`]}); break }}}