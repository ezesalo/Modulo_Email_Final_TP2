import {sendEmail} from "./sendEmail.js"
import {messageHtml} from "./mail.js"
import 'dotenv/config.js'



function main (){
//const transporter = sendEmail(process.env.U, process.env.P)
const transporter = sendEmail('clubortemail@gmail.com', 'wmhxyrhimevxswoz')
//transporter.text(`remitente`, `ezesalo@gmail.com`, `Prueba Text`, `Prueba con texto plano`)
//transporter.html(`remitente`, `ezesalo@gmail.com`, `Prueba Html`, messageHtml)
transporter.file(`remitente`, `ezesalo@gmail.com`, `Prueba Html`, messageHtml, "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-930x487.jpg")

}

main()