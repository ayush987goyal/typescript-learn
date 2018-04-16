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
