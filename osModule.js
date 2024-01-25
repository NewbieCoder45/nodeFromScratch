const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//this method returns the seconds system has been running for
console.log('This system has been running since ' + os.uptime() + ' seconds');

// console.log('This system has been running since ${os.uptime()} seconds')

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)