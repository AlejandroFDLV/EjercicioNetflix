import Cl_Agencia from "./Cl_Agencia.js"
import Cl_Suscriptor from "./Cl_Suscriptor.js"

let Agencia= new Cl_Agencia(),
suscriptorA = new Cl_Suscriptor(15457858, "A"),
suscriptorB = new Cl_Suscriptor(15457860, "B"),
suscriptorC = new Cl_Suscriptor(15457870, "C");
Agencia.proSus(suscriptorA)
Agencia.proSus(suscriptorB)
Agencia.proSus(suscriptorC)

let salida=document.getElementById("salida")
    salida.innerHTML= `
    El suscriptor de cédula ${suscriptorA.cedula} paga ${suscriptorA.prePag()}$.
    <br>El suscriptor de cédula ${suscriptorB.cedula} paga ${suscriptorB.prePag()}$.
    <br>El suscriptor de cédula ${suscriptorC.cedula} paga ${suscriptorC.prePag()}$.
    <br>Porcentaje de suscriptores que no pagaron el servicio de conexión: ${Agencia.porSusNP().toFixed(2)}%.
    <br> El plan favorito: ${Agencia.plFav()}`