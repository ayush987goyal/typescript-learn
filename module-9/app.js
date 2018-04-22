"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Myperson = /** @class */ (function () {
    function Myperson() {
        console.log('Hi');
    }
    Myperson = __decorate([
        logged
    ], Myperson);
    return Myperson;
}());
// Factories
function logging(value) {
    return value ? logged : null;
}
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus = __decorate([
        logging(true)
    ], Bus);
    return Bus;
}());
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = 'Green Plant';
    }
    Plant = __decorate([
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
// Method decorator
// Property decorators
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = { writable: value };
        return newDescriptor;
    };
}
var MyProject = /** @class */ (function () {
    function MyProject(name) {
        this.name = name;
    }
    MyProject.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], MyProject.prototype, "name", void 0);
    __decorate([
        editable(false)
    ], MyProject.prototype, "calcBudget", null);
    return MyProject;
}());
var proj = new MyProject('Super');
proj.calcBudget();
// proj.calcBudget = function() {
//   console.log(2000);
// };
proj.calcBudget();
console.log(proj);
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log('Target: ', target);
    console.log('methodName: ', methodName);
    console.log('paramIndex: ', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        printAll ? console.log(10000) : console.log(2000);
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course('dsf');
course.printStudentNumbers('any', true);
course.printStudentNumbers('any', false);
