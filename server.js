const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const PORT = 7500 || process.env.PORT

server.listen(PORT, () => { console.log(`Server running in port ${ PORT }`) })

const Router = require('./Routes/index')
app.use(Router)