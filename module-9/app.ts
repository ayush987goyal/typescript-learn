function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Myperson {
  constructor() {
    console.log('Hi');
  }
}

// Factories
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Bus {}

// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

@logging(true)
@printable
class Plant {
  name = 'Green Plant';
}

const plant = new Plant();
(<any>plant).print();

// Method decorator
// Property decorators
function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  };
}

function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = { writable: value };
    return newDescriptor;
  };
}

class MyProject {
  @overwritable(true)
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const proj = new MyProject('Super');
proj.calcBudget();
// proj.calcBudget = function() {
//   console.log(2000);
// };
proj.calcBudget();
console.log(proj);

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target: ', target);
  console.log('methodName: ', methodName);
  console.log('paramIndex: ', paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    printAll ? console.log(10000) : console.log(2000);
  }
}

const course = new Course('dsf');
course.printStudentNumbers('any', true);
course.printStudentNumbers('any', false);
