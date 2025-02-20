/*
En una empresa hay proceso donde cada trabajador debe registrar las horas de entrada y salida diariamente. De esta forma, al final de cada día,
 su empleador sabrá cuánto tiene que pagarles por sus horas trabajadas.

Pero, si una persona trabajó más de ocho horas, se le debe pagar un costo extra por las horas adicionales, que es igual a 1.5 veces el monto
 de su tarifa por hora.

Haz un programa que, recibiendo la tarifa por hora, la hora de entrada y la hora de salida, imprima el monto total de dinero que ese empleado
 recibió ese día.

Tarifa por hora: $10
Hora de entrada: 9:00
Hora de salida: 18:00

✔ Respuesta: $95
*/

const prompt = require("prompt-sync")()


const calculateSalary = (hourlyRate, entryTime, departureTime) =>{
const [entryHour] = entryTime.split(":")

const [departureHour] = departureTime.split(":")

const workedHours = departureHour - entryHour

let salary = 0

if (workedHours <= 8){
    salary = hourlyRate * workedHours
}else{
    const extraHours = workedHours - 8
    salary = (hourlyRate * 8) + ((extraHours * hourlyRate) * 1.5)
}

return salary
}

function main(){

const hourlyRate = parseInt(prompt("Hourly Rate $: "))

const entryTime = prompt("Entry time(hour:minutes): ")

const departureTime = prompt("Departure time time(hour:minutes): ")

const salary = calculateSalary(hourlyRate, entryTime, departureTime)

console.log(`Salary: $${salary}`)
}
main()