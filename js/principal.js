/*ENUNCIADO

Una agencia vende planes Netflix (A: para 1 TV, B: para 2 TVs, C: para 5 TVs), así: 
A= suscripción $3, B= suscripción $5, C= suscripción $10; 
además el suscriptor debe pagar un 10% adicional del valor de la suscripción por servicio de conexión (menos el plan C, que ya lo incluye).
En este sentido, se desea conocer: 
a) precio a pagar por cada suscriptor, b) porcentaje de suscriptores que no pagaron servicio de conexión, c) cuál es el plan favorito.
La agencia manifiesta que el formato para la salida de los requerimientos solicitados es:
El suscriptor con cedula 15457858 paga 3.3$
El suscriptor con cedula 15457859 paga 5.5$
El suscriptor con cedula 15457667 paga 10$
Porcentaje de suscriptores que no pagaron servicio de conexión: 33.33%
Cuál es el plan favorito: Iguales de favorito: Plan A, Plan B y Plan C.
La salida corresponde a los siguientes datos del suscriptor (cedula, tipo plan):
(15457858, A) (15457859, B) (15457667, C)*/

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