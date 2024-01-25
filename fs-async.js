//Read and write files with an asynchronous approach

const { log } = require('console')
const { readFile, writeFile } = require('fs')

//In asynchronous version of read&writeFile we also have to define a callback function
// i.e. defining a set of methods, function will do if its triggered
//We are defining two callback function (err, result)

//SYNC VS ASYN
//Notice the sequence difference between sync and async logs to 
//understand the difference between sync and async

console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            return
        }
        const second = result
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${second} `,
            (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(result)
                }
                console.log('done with this task')
            })
    })

})
console.log('starting the next one')