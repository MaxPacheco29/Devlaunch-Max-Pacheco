/*
Escribe un programa sencillo en JavaScript que calcule y muestre el Índice de Masa Corporal (IMC) de un usuario. 
El programa debe solicitar al usuario su nombre, altura en metros y peso en kilogramos.

Después de calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya su nombre y el valor de su IMC.

Calcula el IMC utilizando la fórmula:

IMC = weight / height^2

Nombre: John
Altura: 1.75 
Peso: 70
*/

const prompt = require("prompt-sync")()

const name = (prompt("Nombre: "))

const height = parseFloat(prompt("Altura(m): "))

const weight = parseFloat(prompt("Peso(kg): "))

let IMC = weight / (height**2)

console.log(`Nombre: ${name} IMC: ${IMC.toFixed(1)}`)
