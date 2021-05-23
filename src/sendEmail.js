import nodemailer from 'nodemailer';

//crear transporter

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'clubortemail@gmail.com', // generated ethereal user
      pass: 'wmhxyrhimevxswoz', // generated ethereal password
    },
  });

function sendEmail(emailBody){
       
    transporter.sendMail(emailBody, (err, data) =>{
          if(err){
              console.log('Ocurrio un error', err)
          }else{
              console.log('Mail enviado')
          }
      })}



export {sendEmail}