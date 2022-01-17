require('dotenv').config()
const nodemailer = require('nodemailer')

async function nodeMailer(email) {

   let transporter = nodemailer.createTransport({
      port: 587,
      service: 'gmail',
      auth: {
         user: process.env.E_USERNAME, // generated ethereal user
         pass: process.env.E_PASSWORD, // generated ethereal password
      }
   })

   let info = await transporter.sendMail({
      from: process.env.E_USERNAME, // sender address
      to: email, // list of receivers
      subject: "WEB-PROGRAMMING", // Subject line
      text: "Hello " + email, // plain text body
      html: "<b>Do you want to lear IT you come to 'Najot ta'lim' education center</b>", // html body
   })

   console.log("Message sent: %s", info.messageId);
}

module.exports = nodeMailer