const express = require('express')
const ejs = require('ejs')
const nodemailer = require('nodemailer')
const path = require('path')
const PORT = process.env.PORT || 8000
const app = express()

//Router
const Router = require('./src/router')
const { posix } = require('path')

//Middlewares
app.use(express.json())
app.set('view engine', 'ejs')
app.use('/assets', express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(Router)


//server Listining
app.listen(PORT, console.log(PORT))