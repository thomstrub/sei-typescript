const message: string = "Hello World"
console.log(message)

const person: {
    name: string,
    age: number
} = {
    name: 'Alex',
    age: 32
}

interface Person {
    firstName: string,
    lastName: string,
    sayHi(): string
}

const customer: Person = {
    firstName: 'Laura',
    lastName: 'Williams',
    sayHi() { return `Hello, ${this.firstName} ${this.lastName}` }
}

console.log(customer.sayHi)