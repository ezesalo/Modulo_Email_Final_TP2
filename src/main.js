import "dotenv/config.js"
import {conectarCuenta} from "./conectarCuenta.js"
import {mailHtml} from "../test/mailHtmlSolo.js"
import {mailHtmlImagen} from "../test/mailHtmlConImagen.js"



function main (){
//Prueba con variables de entorno. Lo tengo que seguir viendo con el profe
//const cuentaClub = conectarCuenta(process.env.USUARIO, process.env.CONSTRSENA)


//Prueba sin variables de entorno para mail y contraseña
const cuentaClub = conectarCuenta("clubortemail@gmail.com", "wmhxyrhimevxswoz")

//cuentaClub.enviarConTexto(`remitente`, `ezesalo@gmail.com`, `Prueba Text`, `Prueba con texto plano`)

//cuentaClub.enviarConHtml(`remitente`, `ezesalo@gmail.com`, `Prueba Html con imagen`, mailHtmlImagen)

cuentaClub.enviarConAdjunto(`remitente`, `ezesalo@gmail.com`, `Prueba Adjunto`, mailHtml, "img.jpg", "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-930x487.jpg")

}

main()