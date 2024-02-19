const http = require('http')

// creating a server
const server = http.createServer((req, res) =>{
    res.write(`Hello world!`)
    res.end()
})

// listening toa server
PORT = 3000
server.listen(3000, () =>{
    console.log(`server running on port${PORT}`)
})