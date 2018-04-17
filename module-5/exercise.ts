class Car {
  acceleration: number = 0;

  constructor(public name: string) {}

  honk() {
    console.log('Tooooot!');
  }

  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

class Base {
  width = 0;
  length = 0;
}

class Rectangle extends Base {
  calcSize(): number {
    return this.length * this.width;
  }
}
let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

class NewPerson {
  private _firstName: string = '';

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value.length > 3 ? value : '';
  }
}
let persona = new NewPerson();
console.log(persona.firstName);
persona.firstName = 'Ma';
console.log(persona.firstName);
persona.firstName = 'Maximilian';
console.log(persona.firstName);
