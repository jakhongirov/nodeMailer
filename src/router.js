const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()

//Routers
const HomeRouter = require('./routers/HomeRouter')
const ContactRouter = require('./routers/ContactRouter')


//Middlewares
app.use(express.json())
app.set('view engine', 'ejs')
app.use('/assets', express.static(path.resolve(__dirname, 'public')))
app.use(HomeRouter)
app.use(ContactRouter)

module.exports = app