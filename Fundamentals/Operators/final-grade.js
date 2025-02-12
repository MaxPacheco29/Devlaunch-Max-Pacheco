/*
Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes en una escuela. Como parte de este desafío,
 primero configuras el entorno para recibir entradas del usuario, permitiendo que ingresen tres notas.

Luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presentas el resultado formateado con máximo dos decimales, para asegurar una lectura clara.

Si el usuario ingresa las calificaciones 80, 70 y 90, la salida será: 80
*/

const prompt = require("prompt-sync")()

const amountOfGrades = 3

const maxDecimals = 2

const firstGrade = parseFloat(prompt("Calificacion de primer examen: "))

const secondGrade = parseFloat(prompt("Calificacion de segundo examen: "))

const thirdGrade = parseFloat(prompt("Calificacion de tercer examen: "))

let average = (firstGrade + secondGrade + thirdGrade) / amountOfGrades

console.log(`Final Grade: ${average.toFixed(maxDecimals)}`)



