// in these cases the typing is optional since typescript can infer the type of the variable
let nickName: string = 'Cristiano Ronaldo';
let age: number = 23;
let club: string = 'Real Madrid';
let isFan: boolean = true;

// this is the typing of an object in typescript
type Player = { nickName: string; age: number; club: string; isFan: boolean };

const player: Player = { nickName, age, club, isFan };
const players: Player[] = [player];
const scndPlayer: Player = {
  nickName: 'Lionel Messi',
  age: 23,
  club: 'Barcelona',
  isFan: true,
};
players.push(scndPlayer);

//these are examples of union types
let unionAge: string | number = '24';
unionAge = 24;
unionAge = '34';

let unionNickName: string | string[] = 'Cristiano Ronaldo';
unionNickName = ['Cristiano Ronaldo', 'CR7'];

// these are examples of intersection types
type PlayerWithPosition = Player & { position: string };
const playerWithPosition: PlayerWithPosition = {
  nickName,
  age,
  club,
  isFan,
  position: 'forward',
};

//functions and types
function add(a: number, b: number): number {
  return a + b;
}

function playerToString(player: Player): string {
  return `${player.nickName} is ${player.age} years old and plays for ${player.club}`;
}

// you can also use arrow functions
const playersToString = (players: Player[]): string[] =>
  players.map(playerToString);

// generics

function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

const numbers = [1, 2, 3, 4];
const updatedNumbers = insertAtBeginning(numbers, -1);
const strings = ['a', 'b', 'c'];
const updatedStrings = insertAtBeginning(strings, 'd');

//classes with typescript
class Student {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  disenroll(courseName: string) {
    this.courses = this.courses.filter((course) => course !== courseName);
  }
}

const student = new Student('Cristiano', 'Ronaldo', 23, ['Math', 'English']);
student.enroll('Science');
console.log(student.courses);

// you can also use generics with interfaces
interface Queue<T> {
  readonly size: number;
  enqueue(value: T): void;
  dequeue(): T;
}

//classes and interfaces with typescript
class QueueClass<T> implements Queue<T> {
  private data: T[] = [];
  constructor() {}
  get size() {
    return this.data.length;
  }
  enqueue(value: T) {
    this.data.push(value);
  }
  dequeue() {
    return this.data.shift();
  }
}

