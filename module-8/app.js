"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo('Ayush'));
console.log(echo(22));
console.log(echo({ name: 'ayush', age: 22 }));
// Better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Ayush').length);
console.log(betterEcho(22));
console.log(betterEcho({ name: 'ayush', age: 22 }));
// Built-in generics
var testResults = [1.94, 2.33];
testResults.push(-12.3);
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(testResults);
printAll(['apple', 'banana']);
// Generic types
var echo2 = betterEcho;
console.log(echo2('something'));
// Generic classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
