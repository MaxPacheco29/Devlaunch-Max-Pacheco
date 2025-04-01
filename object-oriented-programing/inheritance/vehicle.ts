/*
Eres responsable de diseñar un sistema sencillo de gestión de vehículos para una empresa de transporte.

El sistema debe representar diferentes tipos de vehículos y sus comportamientos utilizando una estructura de herencia de clases.

Todos los vehículos tienen un emoji, marca, modelo y año de fabricación.

Los vehículos deben poder arrancar y mostrar su información.

Los coches tienen un número específico de puertas y deben poder encender el aire acondicionado.

Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).
*/

class vehicle {
    private isOn: boolean
    constructor(
        protected emoji: string,
        protected brand: string,
        protected model: string,
        protected year: number

    ) {
        this.emoji = emoji
        this.brand = brand
        this.model = model
        this.year = year
        this.isOn = false

    }

    engineOn(){
    this.isOn = true
    }

toString() {
    return `
 Emoji: ${this.emoji}
 Brand: ${this.brand}
 Model: ${this.model}
 Year: ${this.year}
`
}

}


class Car extends vehicle {
    private isAirOn: boolean
constructor(
     brand: string,
     model: string,
     year: number,
     private numOfDoors: number = 4,
){
super("🚗", brand, model, year)
this.isAirOn = false
}
}



class Motorcycle extends vehicle {
    
    constructor(
         brand: string,
         model: string,
         year: number,
         
    ){
    super("🏍️", brand, model, year)
    
    }

    wheelie() {
        return "🛞"
    }
}

const car1 = new Car("Toyota", "etios", 2018)
const mtr1 = new Motorcycle("Suzuki", "ZE", 2015)

console.log(car1.toString())
console.log(mtr1.toString())