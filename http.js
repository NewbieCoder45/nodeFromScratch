//We're learning how to setup a simplified server here without any callback like next, err

const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    //Default render if route entered is undefined
    res.end(`
        <h1> Oops!</h1>
        <p> We can't seem to find the page you're looking for </p>
        <a href= '/'> Home page </a> `
    )
})



server.listen(5000)

if(server.listen === 5000){
    console.log("Server is running on localhost 5000")
}