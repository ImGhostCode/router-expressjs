const express = require('express')
const app = express()

app.use(express.json())
app.use(require('./routers/index'))

module.exports =  app
