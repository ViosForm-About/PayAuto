import nodemailer from "nodemailer"

export default async function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  await transporter.sendMail({
    from: `"VIOS ALL PAY" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TARGET,
    subject: "Pesan dari VIOS ALL PAY",
    text: req.body.message
  })

  res.status(200).json({ success: true })
}
