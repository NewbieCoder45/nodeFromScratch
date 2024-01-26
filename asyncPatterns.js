const http = require('http')

//Problem occurs in asynchronous approach when we set up 
//some blocking code

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Home page')
    }
    else if(req.url === '/about'){
        //This synchrounous code will not only slow down the /about page but also the other routes
        //It will slow down all the other routes and will only process other requests
        //once this loop has finished printing till 999, 999
        for(let i=0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i}, ${j}`)
            }
        }
        res.end('About page')
    }else{
        res.end('Error page')
    }
})

server.listen(5000, () => {
    console.log("Server is listening on port 5000")
})