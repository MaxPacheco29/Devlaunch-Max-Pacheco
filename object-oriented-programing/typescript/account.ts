/*
Estás diseñando un sistema básico para gestionar cuentas bancarias de clientes.

Cada cuenta bancaria tendrá un identificador único, un nombre del titular, y un saldo.

Tu tarea es crear una función createAccount que genere un objeto de cuenta bancaria.

El objeto debe ser creado por medio de un function declaration, con todas las propiedades y métodos deben estar definidos dentro de la 
función usando this.

Propiedades de la cuenta bancaria (dentro de la función usando this):

id: identificador único de la cuenta.
holderName: nombre del titular de la cuenta.
balance: saldo de la cuenta.
Métodos de la cuenta bancaria (dentro de la función usando this):

deposit(amount): incrementa el saldo de la cuenta.
withdraw(amount): disminuye el saldo de la cuenta si hay suficientes fondos.
transfer(toAccount, amount): transfiere fondos de la cuenta actual a otra cuenta si hay suficientes fondos disponibles.
*/


interface accountShape {
    id: number, 
    name: string, 
    balance: number
    deposit: (amount: number) => void
    withdraw: (amount: number) => number | null
    transfer: (toAccount: accountShape, amount: number) => accountShape | null
}


const Account = function (id: number, name: string, balance: number = 0): accountShape {
this.id = id
this.name = name
this.balance = balance
this.deposit = (amount: number) => {
    this.balance = this.balance + amount
}
this.withdraw = (amount: number ) => {
   if (this.balance >= amount) {
    this.balance = this.balance - amount
    return amount
} 

return null 
}

this.transfer = (toAccount: accountShape, amount: number) => {
    const money = this.withdraw(amount)

    if (money) {
    toAccount.deposit(money)
    return toAccount
    }

    return null 
}


return this
}

const acc1 = new (Account as any) (1, "Max", 50000)
acc1.deposit(2000)
acc1.withdraw(10000)

const acc2 = new (Account as any) (2, "Alberto")

console.log(acc1.transfer(acc2, 5000))

console.log(acc1)