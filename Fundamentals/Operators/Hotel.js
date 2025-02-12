/*
Crea un programa en JS que calcule la factura total de un hotel, donde
cada habitacion tiene un precio de $100 por noche, aprovechando una oferta promocional 
que incluye un descuento del 5%

El programa debe solicitar al huesped el numero de noches que paso en el hotel
para calcular la factura final. 

Si el usuario ingresa 5 noches, la salida sera: $475.00
*/

const prompt = require("prompt-sync")();

const numberOfDays = parseInt(prompt("¿Cuantos dias desea quedarse? : "))

const costPerNight = 100

const promoDiscount = 0.05 

let totalCost = costPerNight * numberOfDays

let discount = totalCost * promoDiscount

let finalCost = totalCost - discount

console.log(`
-----------------
   Hotel Receipt
-----------------   
   Payment:
   Total: $${totalCost}
   Discount: $${discount}
   Final Cost: $${finalCost}  
    
    `)









