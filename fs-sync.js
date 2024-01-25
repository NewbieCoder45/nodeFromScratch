const { error } = require('console');
const fs = require('fs')

//  console.log(fs.readFileSync('./content/first.txt').toString())
console.log('start')
 const firstFile = fs.readFileSync('./content/first.txt', 'utf8')
 const secondFile = fs.readFileSync('./content/second.txt', 'utf8')
 console.log(secondFile)
 console.log(firstFile)

 fs.writeFileSync('./content/result-sync.txt',
                    `Here is the result: ${firstFile}, ${secondFile}`)
//To just append some text in the file rather than replacing it, 
//we can use {flag: 'a'} as a third parameter 

fs.writeFileSync('./content/result-sync.txt', 
                    '\n Here lies appended text on a new line',
                    {flag: 'a'})
fs.writeFileSync('./content/first.txt', '\n This is a new line text')
fs.writeFileSync('./content/second.txt', 'We\'re editing an unmade file \n and this is a new line')
console.log('done with this task')
console.log('starting the next one')
// fs.mkdir('./utils', error ("Invalid path"),)