const fs = require('fs')
module.exports = (client,Discord) => {
    const loaddir = (dir) => {
        const eventFiles = fs.readdirSync(`C:/Users/freem/Desktop/media/projects/jakabot/events`) // Get files for command execution
            .filter(file => file.endsWith(`.js`)) // Retrieve JavaScript files
        
        for(const file of eventFiles){
            const event = require(`C:/Users/freem/Desktop/media/projects/jakabot/events/${dir}/${file}`)
            const eventName = file.split('.')[0]
            client.on(eventName, event.bind(null,client,Discord)) }}

        ['client','guild'].forEach(e => loaddir(e)) }
