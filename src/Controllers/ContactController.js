const nodemailer = require('nodemailer')
const IO = require('../utils/IO/IO')
const path = require('path')
const students = new IO(path.resolve(__dirname, '../model/students.json'))

const nodeMailer = require('../nodemailer/nodemailer')


const contact = (req, res) => {
   const studentsData = JSON.parse(students.read())
   const { name, email } = req.body
   const NewStudent = {}

   NewStudent.id = studentsData.length + 1
   NewStudent.name = name
   NewStudent.email = email

   studentsData.push(NewStudent)
   students.write(studentsData)

   // console.log(email);
   nodeMailer(email)
   res.redirect('/')
}

module.exports = contact