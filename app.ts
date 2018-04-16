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
