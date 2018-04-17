class Person {
  name: string;
  private type: string;
  protected age: number = 22;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
  }

  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person('Aush', 'ksadfkjf');
console.log(person);
person.printAge();
person.setType('mine');

// Inheritance
class Ayush extends Person {
  //   name = 'Ayush';

  constructor(username: string) {
    super('Ayush', username);
    this.age = 23;
  }
}

const ayu = new Ayush('sdfdsf');
console.log(ayu);

// Getter and Setters
class Plant {
  private _species: string = 'Default';

  get species() {
    return this._species;
  }

  set species(value: string) {
    this._species = value.length > 3 ? value : 'Default';
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'ab';
console.log(plant.species);

// Static properties and methods
class Helpers {
  static PI: number = 3.14;

  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(2));

// Abstract classes
abstract class Project {
  projectName: string = 'Default';
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string) {
    this.projectName = name;
  }
}

let itProject = new ITProject();
console.log(itProject.calcBudget());

// Private constructors and singleton classes
// readonly properties
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The only one');
    }

    return OnlyOne.instance;
  }
}

let right = OnlyOne.getInstance();
console.log(right);
