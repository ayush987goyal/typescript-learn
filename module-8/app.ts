// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo('Ayush'));
console.log(echo(22));
console.log(echo({ name: 'ayush', age: 22 }));

// Better generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('Ayush').length);
console.log(betterEcho<number>(22));
console.log(betterEcho({ name: 'ayush', age: 22 }));

// Built-in generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-12.3);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}

printAll(testResults);
printAll<String>(['apple', 'banana']);

// Generic types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('something'));

// Generic classes
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;

  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
