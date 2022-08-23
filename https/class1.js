const https = require('http');
const fs = require('fs');

const server = https.createServer((req, res) => {
    fs.readFile('./index.html', (er, dt) => {
        res.write(dt)
        res.end()
    })

})


server.listen(1000, () => {
    console.log('server is running')
})


