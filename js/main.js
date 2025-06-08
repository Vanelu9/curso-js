//Simulador de agenda de citas//


alert("¡Bienvenidx a Psicologia y Cafe!\nEstás a punto de agendar tu primera sesión de psicoterapia online.\nEste es el primer paso hacia tu bienestar emocional.\nPor favor, completa tus datos para agendar una sesión.")

function mostrarcalendario(){
    console.log("Dias y horarios disponibles")
    }

    mostrarcalendario()

const dias = ["lunes","martes","miercoles","jueves","viernes"]
const horarios = ["09.00","10.00","11.00","12.00","13.00","14.00","15.00","16.00","17.00","18.00","19.00","20.00"]

let nombre = prompt("¿Cual es tu nombre?")
let edad = prompt("¿Que edad tienes?")
let diasesion = prompt("¿Que dia quieres agendar tu sesion?")
let motivodeconsulta = prompt ("¿Cual es tu motivo de consulta?")


let sesionconfirmada = true

if (sesionconfirmada) {
  console.log("Gracias por agendar tu sesión. Nos vemos pronto :)")
} else {
  console.log("La sesión aún no fue confirmada. Por favor, completa tus datos para confirmarla.")
}


const terapeuta = "Licenciada en Psicologia Vanesa Lujan Alejandro"
console.log("Nombre del profesional:" + terapeuta)
const matricula = 9037
console.log("Matricula numero:"+ matricula)
const contacto = 393513693972
console.log("Numero de contacto:" + contacto)


function modificarcalendario (){
  alert("Estas por modificar tu sesion. ¿Quieres continuar?")
  }

modificarcalendario()

  let modificar = si


  if (modificar == si){
    console.log("Por favor, selecciona un nuevo dia y horario para tu sesion")
    } else{
      console.log("Nos vemos en tu dia y horario seleccionado")
      }

function eliminarsesion (){
  alert("Estas por cancelar tu sesion. ¿Quieres continuar?")
  }

  eliminarsesion()

  let cancelarsesion = si

  if (cancelarsesion == si){
    console.log("Lo lamento, espero nos veamos pronto")
    } else {
      console.log("Genial! Nos vemos en tu dia y horario seleccionados")
      }














  







  










