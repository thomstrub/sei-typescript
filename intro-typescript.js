var message = "Hello World";
console.log(message);
var person = {
    name: 'Alex',
    age: 32
};
var customer = {
    firstName: 'Laura',
    lastName: 'Williams',
    sayHi: function () { return "Hello, " + this.firstName + " " + this.lastName; }
};
console.log(customer.sayHi);
