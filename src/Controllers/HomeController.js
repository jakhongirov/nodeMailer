const IO = require('../utils/IO/IO')
const path = require('path')
const user = new IO(path.resolve(__dirname, '../model/user.json'))
const about = new IO(path.resolve(__dirname, '../model/about.json'))

const Home = (req, res) => {
   const userData = JSON.parse(user.read())
   const aboutData = JSON.parse(about.read())
   res.render('index', { user: userData, about: aboutData })
}

module.exports = Home