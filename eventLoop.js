//An event loop helps us offload some functions to help 
//decreasing the load from the server and letting all the other
//synchronous requests run first

//We can do it by setInterval method for now

setInterval(() =>{
    console.log('Hello world')
}, 2000)

console.log('This will be executed before')

//setInterval vs setTimeout:
    //setInterval is a loop method which will run every said interval
    //setTimeout runs after the said interval (only once)
    