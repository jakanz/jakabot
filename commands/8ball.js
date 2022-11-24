const cmdRsrc = require('../json/cmdRsrc.json') // Retrieve cmdRsrc
module.exports = {
    name: '8ball',
    description: "Ask a question and determine the answer to it with the magic 8-ball.",
    execute(message, args){
        if(!args[0]){message.reply("How did you manage to forget to ask a magic 8-ball a question?")}
        else {
            var possiblePredictions = ['ballpositive', 'ballnoncommittant', 'ballnegative'] // TODO: Add 2/4 positive - 1/4 noncomm - 1/4 negative chance functions
            const prediction = possiblePredictions[Math.floor(Math.random()*possiblePredictions.length)]

            switch(prediction){
                case 'ballpositive':
                    let positivePrediction = cmdRsrc.ballpositive[Math.floor(Math.random()*cmdRsrc.ballpositive.length)]
                    message.channel.sendTyping(2500)
                    message.reply(`:8ball::green_circle:  ${positivePrediction}`); break
                case 'ballnoncommittant':
                    let noncommittantPrediction = cmdRsrc.ballnoncommittant[Math.floor(Math.random()*cmdRsrc.ballnoncommittant.length)]
                    message.channel.sendTyping(2500)
                    message.reply(`:8ball::orange_circle:  ${noncommittantPrediction}`); break
                case 'ballnegative':
                    let negativePrediction = cmdRsrc.ballnegative[Math.floor(Math.random()*cmdRsrc.ballnegative.length)]
                    message.channel.sendTyping(2500)
                    message.reply(`:8ball::red_circle:  ${negativePrediction}`); break }}}}