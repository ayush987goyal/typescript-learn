"use strict";
function greete(person) {
    console.log("Hello, " + person.firstName);
    console.log(person);
}
function changeName(person) {
    person.firstName = 'Kus';
}
var personn = {
    firstName: 'Ayush',
    hobbies: ['cooki', 'sports'],
    greet: function (lastName) {
        console.log("I am " + this.firstName + " " + lastName);
    }
};
// greete({ firstName: 'Ayush', age: 22 });
changeName(personn);
greete(personn);
personn.greet('dsfsdf');
var Personn = /** @class */ (function () {
    function Personn() {
    }
    Personn.prototype.greet = function (lastName) {
        console.log("I am " + this.firstName + " " + lastName);
    };
    return Personn;
}());
var newPer = new Personn();
newPer.firstName = 'asdfsdf';
newPer.greet('dasfsd');
var doubleFn;
doubleFn = function (num1, num2) {
    return num1 + num2;
};
console.log(doubleFn(1, 2));
var oldPers = {
    age: 22,
    firstName: 'sdsdf',
    greet: function (first) {
        console.log('sdfsdfsdf');
    }
};
