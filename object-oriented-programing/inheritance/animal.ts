/*
Un zoológico necesita un sistema para gestionar los animales y sus comportamientos.
Debes modelar un conjunto de clases que representen distintos tipos de animales y sus características.

Todos los animales tienen un nombre, especie y edad. Además, todos deben poder emitir un sonido y mostrar su información básica.

Algunos animales, como los leones, pueden rugir y tienen una melena. Los elefantes pueden hacer sonar su trompa y tienen un tamaño
 específico (por ejemplo, 'pequeño', 'mediano' o 'grande').

Crea una clase base Animal con las propiedades y métodos necesarios.

Extender la clase Animal para crear clases específicas como Leon y Elefante que tengan comportamientos y propiedades particulares.
*/

type animalReproductiveMethod = "mammal" | "oviparous"
type animalDietType = "carnivore" | "herbivore" | "omnivore"

class animal {
constructor(
    public name: string,
    public specie: string,
    public age: number,
    public reproductiveMethod: animalReproductiveMethod,
    public dietType: animalDietType


) {
this.name = name
this.specie = specie
this.age = age
this.reproductiveMethod = reproductiveMethod
this.dietType = dietType
}

makeSound() {
return ""
}

toString() {
return `
 Name: ${this.name}
 Specie: ${this.specie}
 Age: ${this.age}
 Reproductive Method: ${this.reproductiveMethod}
 Diet Type: ${this.dietType}
`
}


}

class lion extends animal {
    constructor(
        name: string,
        specie: string,
        age: number,
        reproductiveMethod: animalReproductiveMethod,
        dietType: animalDietType
    
    
    ) {
        super(name, specie, age, reproductiveMethod, dietType)
}

makeSound(): string {
    return "Roar"
}

print(): string {
const info = this.toString()
return `${info}`
} 
}





type ElephantSize = "Small" | "Medium" | "Large"

class Elephant extends animal {
    constructor(
        name: string,
        specie: string,
        age: number,
        reproductiveMethod: animalReproductiveMethod,
        dietType: animalDietType,
        private size: ElephantSize
    
    
    ) {
        super(name, specie, age, reproductiveMethod, dietType)
}

makeSound(): string {
    return "Prrrr"
}

print(): string {
    const info = this.toString()
    return `${info}\nSize: ${this.size}`
    } 

}


const l1 = new lion("Kovu", "african lion", 5, "mammal", "carnivore")
console.log(l1.makeSound())
console.log(l1.print())

const e2 = new Elephant("Tony", "african elephant", 10, "mammal", "herbivore", "Large")
console.log(e2.makeSound())
console.log(e2.print())