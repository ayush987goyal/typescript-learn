interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}

function greete(person: NamedPerson) {
  console.log(`Hello, ${person.firstName}`);
  console.log(person);
}

function changeName(person: NamedPerson) {
  person.firstName = 'Kus';
}

const personn: NamedPerson = {
  firstName: 'Ayush',
  hobbies: ['cooki', 'sports'],
  greet(lastName: string) {
    console.log(`I am ${this.firstName} ${lastName}`);
  }
};

// greete({ firstName: 'Ayush', age: 22 });
changeName(personn);
greete(personn);
personn.greet('dsfsdf');

class Personn implements NamedPerson {
  firstName: string;
  greet(lastName: string) {
    console.log(`I am ${this.firstName} ${lastName}`);
  }
}

const newPer = new Personn();
newPer.firstName = 'asdfsdf';
newPer.greet('dasfsd');

// Function types

interface DoubleValueFn {
  (number1: number, number2: number): number;
}

let doubleFn: DoubleValueFn;
doubleFn = function(num1: number, num2: number) {
  return num1 + num2;
};

console.log(doubleFn(1, 2));

// Interface inheritance

interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPers: AgedPerson = {
  age: 22,
  firstName: 'sdsdf',
  greet(first: string) {
    console.log('sdfsdfsdf');
  }
};
