const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()

//Controller
const HomeController = require('../Controllers/HomeController')

//Middlewares
app.use(express.json())
app.set('view engine', 'ejs')
app.use('/assets', express.static(path.resolve(__dirname, 'public')))

//GET methods
app.get('/', HomeController)

module.exports = app