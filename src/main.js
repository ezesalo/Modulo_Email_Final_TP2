import {sendEmail} from "./sendEmail.js"

const mailOptions2 = {
    from: 'Remitente',
    to: 'ezesalo@gmail.com',
    subject: 'Prueba de email nueva compu',
    html: "<h1>Prueba</h1>"
    
}

function main (){
sendEmail(mailOptions2)
}

main()