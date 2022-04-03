const cmdRsrc = require('../json/cmdRsrc.json') // Retrieve cmdRsrc
const { Client, Intents, Channel } = require('discord.js') // Retreive client
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_TYPING] })
module.exports = {
    name: '8ball',
    description: "predictions",
    execute(message, args){
        if(!args[0]){message.reply("How did you manage to forget to ask a magic 8-ball a question?")}
        else {
            // Determine positive, noncommittant, or negative response
            var possiblePredictions = ['ballpositive', 'ballnoncommittant', 'ballnegative']
            const prediction = possiblePredictions[Math.floor(Math.random()*possiblePredictions.length)]

            // Choose an answer from its respective response type
            switch(prediction){
                case 'ballpositive':
                    let positivePrediction = cmdRsrc.ballpositive[Math.floor(Math.random()*cmdRsrc.ballpositive.length)]
                    message.channel.sendTyping(2500)
                    message.reply(`:8ball::green_circle:  ${positivePrediction}`)
                    break;
                case 'ballnoncommittant':
                    let noncommittantPrediction = cmdRsrc.ballnoncommittant[Math.floor(Math.random()*cmdRsrc.ballnoncommittant.length)]
                    message.channel.sendTyping(2500)
                    message.reply(`:8ball::orange_circle:  ${noncommittantPrediction}`)
                    break;
                case 'ballnegative':
                    let negativePrediction = cmdRsrc.ballnegative[Math.floor(Math.random()*cmdRsrc.ballnegative.length)]
                    message.channel.sendTyping(2500)
                    message.reply(`:8ball::red_circle:  ${negativePrediction}`)
                    break;
            }
        }
    }
}