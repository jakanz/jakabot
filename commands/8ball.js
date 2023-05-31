const cmdRsrc = require('../json/cmdRsrc.json') // Retrieve cmdRsrc
module.exports = {
    name: '8ball',
    description: "Ask a question and determine the answer to it with the magic 8-ball.",
    execute(message, args){
        if(!args[0]){message.reply("How did you manage to forget to ask a magic 8-ball a question?")}
        else{makePrediction()}

        function makePrediction(){
            var dict = Math.floor(Math.random() * 4)
            if (dict <= 1)              {message.reply(`:8ball::green_circle:  ${cmdRsrc.ballpositive[Math.floor(Math.random()*cmdRsrc.ballpositive.length)]}`)}
            else if (dict == 2)         {message.reply(`:8ball::orange_circle:  ${cmdRsrc.ballnoncommittant[Math.floor(Math.random()*cmdRsrc.ballnoncommittant.length)]}`)}
            else                        {message.reply(`:8ball::red_circle:  ${cmdRsrc.ballnegative[Math.floor(Math.random()*cmdRsrc.ballnegative.length)]}`)}
        }
    }
}