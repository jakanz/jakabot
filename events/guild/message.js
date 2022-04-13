const cmdRsrc = require('../json/cmdRsrc.json')
module.exports = ()=>{
    if(!message.content.startsWith(config.prefix) || message.author.bot) return // Message does not contain command prefix or message is written by bot, ignore

    const args = message.content.slice(config.prefix.length).split(/ +/) // Slice off the space for bot to understand command
    const command = args.shift().toLowerCase() // If command has uppercase, shift whole command to lowercase

    if (cmdRsrc.commandList.includes(command)) { // If a command from commandList is used (with prefix), execute
        client.commands.get(command).execute(message,args) }}