// in these cases the typing is optional since typescript can infer the type of the variable
let nickName: string = 'Cristiano Ronaldo';
let age: number = 23;
let club:string = 'Real Madrid';
let isFan: boolean = true;

// this is the typing of an object in typescript
type Player = { nickName: string; age: number; club: string; isFan: boolean };

const player: Player = { nickName, age, club, isFan };
const players: Player[] = [player];
const scndPlayer: Player = { nickName: 'Lionel Messi', age: 23, club: 'Barcelona', isFan: true };
players.push(scndPlayer);

//these are examples of union types
let unionAge: string | number = '24';
unionAge = 24;
unionAge = '34';

let unionNickName: string | string[] = 'Cristiano Ronaldo';
unionNickName = ['Cristiano Ronaldo', 'CR7'];

// these are examples of intersection types
type PlayerWithPosition = Player & { position: string };
const playerWithPosition: PlayerWithPosition = { nickName, age, club, isFan, position: 'forward' };

//functions and types
function add(a: number, b: number): number {
    return a + b;
}

function playerToString(player: Player): string {
    return `${player.nickName} is ${player.age} years old and plays for ${player.club}`;
}

// you can also use arrow functions
const playersToString = (players: Player[]): string[] => players.map(playerToString);