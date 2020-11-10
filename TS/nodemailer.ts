import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.GMAIL_USER);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { 
    user: process.env.GMAIL_USER, // gmail만 가능 
    pass: process.env.GMAIL_PASSWORD 
  }
});

transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: "201216jjw@dsm.hs.kr",
  subject: "jiwoo",
  text: "hello",  
}, (err, res) => {
  if(err) console.error(err);
  else console.log(res);  
});