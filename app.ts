// string
let myName = 'Ayush';
// myName = 22;

// number
let myAge = 22.8;
// myAge = 'asd';

// boolean
let hasHobbies = true;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 23;
// myRealAge = 'asd';

// array
let hobbies: any[] = ['cooking', 'sports'];
hobbies = [100];
// hobbies = 100;

// tuples
let address: [string, number] = ['street', 99];

// enums
enum Color {
  Grey, //0
  Green = 100,
  Blue // 101
}
let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = 'bmw';
console.log(car);
car = { brand: 'bmw', series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello!');
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(2, 4));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string; age: number } = {
  name: 'Ayush',
  age: 22
};
// userData = {
//   a: 'hello',
//   b: 22
// };

// complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 22;
myRealRealAge = '22';
// myRealRealAge = true;

// check types
let finalValue = 'A string';
if (typeof finalValue == 'string') {
  console.log(finalValue);
}
