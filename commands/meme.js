const fs = require('fs');
module.exports = {
    name: 'meme',
    description: "haha funnys",
    execute(message, args){
        var memeGifFiles = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/M_gif')
        var memeImgFiles = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/M_img')
        var memeVidFiles = fs.readdirSync('C:/Users/freem/Desktop/media/projects/jakabot/media/M_vid')
        
        if(args[0] == 'gif') {
            let gifChoose = memeGifFiles[Math.floor(Math.random() * memeGifFiles.length)]
            message.channel.send({files: [`./media/M_gif/${gifChoose}`]})
        } else if (args[0] == 'img'){
            let imgChoose = memeImgFiles[Math.floor(Math.random() * memeImgFiles.length)]
            message.channel.send({files: [`./media/M_img/${imgChoose}`]})
        } else if (args[0] == 'vid'){
            let vidChoose = memeVidFiles[Math.floor(Math.random() * memeVidFiles.length)]
            message.channel.send({files: [`./media/M_vid/${vidChoose}`]})
        } else {
            let imgChoose = memeImgFiles[Math.floor(Math.random() * memeImgFiles.length)]
            message.channel.send("You did not specify your preferred meme (or you simply misspelled the argument), so I defaulted to send an image. For further reference, the arguments for my meme command are `gif`, `img`, and `vid`.", {files: [`./media/M_img/${imgChoose}`]})
        }
    }
}