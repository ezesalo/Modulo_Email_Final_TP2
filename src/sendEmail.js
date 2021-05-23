import nodemailer from 'nodemailer';

function sendEmail(mail, pass){
       
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: mail, 
          pass: pass, 
        },
      });

      return{
          text: async (from, to, subject, text) => {

            const mailOptions = {
                from: from,
                to: to,
                subject: subject,
                text: text
            }

            try {
                transporter.sendMail(mailOptions)
                console.log(`mail enviado`)
            } catch (err) {
                console.log(`el mail no pudo ser enviado: ${err}`)
            } 

          },
          html: async (from, to, subject, html) => {
            const mailOptions = {
                from: from,
                to: to,
                subject: subject,
                html: html
            }

            try {
                transporter.sendMail(mailOptions)
                console.log(`mail enviado`)
            } catch (err) {
                console.log(`el mail no pudo ser enviado: ${err}`)
            }
          },
          file: async (from, to, subject, html, url) => {
            const mailOptions = {
                from: from,
                to: to,
                subject: subject,
                html: html,
                attachments:[{
                    filename: `image.jpg`,
                    path: `${url}`
                }]
            }

            try {
                transporter.sendMail(mailOptions)
                console.log(`mail enviado`)
            } catch (err) {
                console.log(`el mail no pudo ser enviado: ${err}`)
            }
          }

        
      }

}
    // transporter.sendMail(emailBody, (err, data) =>{
    //       if(err){
    //           console.log('Ocurrio un error', err)
    //       }else{
    //           console.log('Mail enviado')
    //       }
    //   })}



export {sendEmail}