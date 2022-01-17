const express = require('express')
const app = express()

//Controller
const ContactController = require('../Controllers/ContactController')

//GET methods
app.post('/contact', ContactController)

module.exports = app