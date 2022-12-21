let nodemailer = require('nodemailer')
require('dotenv').config()


exports.send = (req,res) => {
  const { userEmail }   = req.body
  console.log(userEmail)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    prot: 587,
    host: 'smtp.gmlail.com',
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD
    }
  })

  let authcode = String(Math.floor(Math.random()*1000000)).padStart(6, "0")

  const mailOptions = {
    from: process.env.GMAIL_ADDRESS,
    to: userEmail,
    subject: '안녕하세요. 오늘 VOCA 회원가입 인증메일입니다.',
    text: `인증번호: ${authcode} 를 입력창에 입력해주세요.`,
  }
  transporter.sendMail(mailOptions, (err,res) => {
    if (err) throw err

    transporter.close()
  })

  res.send({
    authcode: authcode,
    success: true,
    code: 200,
    msg:'입력하신 이메일로 인증번호가 발송되었습니다.'
  })
}