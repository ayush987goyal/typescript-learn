"use strict";
// string
var myName = 'Ayush';
// myName = 22;
// number
var myAge = 22.8;
// myAge = 'asd';
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 23;
// myRealAge = 'asd';
// array
var hobbies = ['cooking', 'sports'];
hobbies = [100];
// hobbies = 100;
// tuples
var address = ['street', 99];
// enums
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = 'bmw';
console.log(car);
car = { brand: 'bmw', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 4));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'Ayush',
    age: 22
};
// userData = {
//   a: 'hello',
//   b: 22
// };
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 22;
myRealRealAge = '22';
// myRealRealAge = true;
// check types
var finalValue = 'A string';
if (typeof finalValue == 'string') {
    console.log(finalValue);
}
// never
function neverReturns() {
    throw new Error('An error');
}
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
