/*
El programa solicita al usuario su edad con prompt-sync, la convierte a número y utiliza if-else para clasificar:
0 - 2 años: "You are a baby".
3 a 13 años: "You are a child".
14 a 17 años: "You are a teenager".
18 a 29 años: "You are a young adult".
30 a 60 años: "You are an adult".
Más de 60 años: "You are an elderly".
Si la edad es menor de 5, muestra:
"The institution does not support your age, please try again."Es una forma clara y útil de categorizar por edades.
*/

const prompt = require("prompt-sync")()

const age = parseInt(prompt("Digite su edad: "))

 if (age < 0 ){
    console.log("Please digit a valid age")
}else if (age < 3) {
    console.log("You are a baby")
    console.log("The institution does not support your age, please try again")
}else if (age < 14 ){
    console.log("Your are a child")
    if (age < 5)
    console.log("The institution does not support your age, please try again")    
}else if (age < 18){
    console.log("you are a teenager")
}else if (age < 30 ){
    console.log("You are a young adult")
}else if (age < 60 ){
    console.log("Your are an adult")
}else if (age > 60){
    console.log("Your are an elderly")
}else if (age < 0 ){
    console.log("Please digit a valid age")
}else {
    console.log("The institution does not support your age, please try again")
}