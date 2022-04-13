module.exports = ()=>{
    console.log('Successfully started bot.\nBoot time: [ ' + process.uptime() + ' ]') // Confirm successful boot via terminal

    client.user.setActivity('Fresh boot, please be patient...') // Set bot activity status
    setInterval(() => {
        const status = cmdRsrc.randomStatus[Math.floor(Math.random() * cmdRsrc.randomStatus.length)] // Select random status from resource
        client.user.setActivity(status);},30000) } // Set random Discord status every 30000ms (30 seconds)
