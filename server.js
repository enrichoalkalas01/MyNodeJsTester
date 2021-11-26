const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 7500

server.listen(PORT, () => { console.log(`Server running in port ${ PORT }`) })

const Router = require('./Routes/index')
app.use(Router)