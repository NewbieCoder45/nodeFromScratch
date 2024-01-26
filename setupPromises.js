const {readFile , writeFile} = require('fs')

//util module allows us to promisify without defining functions like getText and writeText
//Fourth way of reading/writing to the fiel asynchronously  

//--> We can also implement this same promise method without using the util method
//  --> Modify the {readFile, writeFile} = require('fs') to
//          const { readFile, writeFile } = require('fs').promises and then all we have to do 
//          is change readFilePromise to readFile in the start function
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
    const first = await readFilePromise('./content/first.txt', 'utf8')
    const second = await readFilePromise('./content/second.txt', 'utf8')
    console.log(first)
    console.log(second)
    const third = await writeFilePromise('./content/util-promisify.txt', 'MY EYES by Travis Scott', (err, data)=> {
                            if(err)
                            {
                                console.log(err)
                            }else{
                                console.log(data)
                            }

    })
}
catch(err){
    console.log(err)
}
}

start()
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err){
//                 reject(err)
//                 return
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// const writeText = (path, data) => {
//     writeFile(path, data, 'utf8', (err, result) => {
//         if(err)
//         {
//             console.log(err)
//             return err
//         }
//         else{
//             console.log(result)
//         }
//     })
// }

//This way we can improve our code and also resolve all promises and also catch errors
// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))

// //Second approach to make code a little more cleaner
// const start = async() => {
//     const first = await getText('./content/first.txt')
//     console.log(first)
// }

// start()


//Third way is to wrap the await function in the try catch block so that we can 
// have atleast some control towards the errors
//But we are still using some complex syntax functions to fetch the data
// const start = async() => {
//     try{
//        const first = await getText('./content/first.txt')
//        const second = await getText('./content/second.txt')
//        console.log(first)
//        console.log(second)
//        const third = await writeText('./content/promise-async.txt', 'Main swag ka vikreta hu')
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// start()