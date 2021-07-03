const fs = require('fs');
module.exports = {
    name: 'meme',
    description: "haha funnys",
    execute(message, args){
        const memeGifFiles = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/M_gif')
        const memeImgFiles = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/M_img')
        const memeVidFiles = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/M_vid')
        
        switch (args[0]){
            case 'gif':
                let gifChoose = memeGifFiles[Math.floor(Math.random() * memeGifFiles.length)]
                message.channel.send({files: [`./media/M_gif/${gifChoose}`]})
                break;
            case 'img':
                let imgChoose = memeImgFiles[Math.floor(Math.random() * memeImgFiles.length)]
                message.channel.send({files: [`./media/M_img/${imgChoose}`]})
                break;
            case 'vid':
                let vidChoose = memeVidFiles[Math.floor(Math.random() * memeVidFiles.length)]
                message.channel.send({files: [`./media/M_vid/${vidChoose}`]})
                break;
            default:
                let imgDefaultChoose = memeImgFiles[Math.floor(Math.random() * memeImgFiles.length)]
                message.channel.send("You did not specify your preferred meme (or you simply misspelled the argument), so I defaulted to send an image. For further reference, the arguments for my meme command are `gif`, `img`, and `vid`.", {files: [`./media/M_img/${imgChoose}`]})
                break;
        }
    }
}