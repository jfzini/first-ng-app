import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .over30 {
      background-color: green;
    }`,
    `.under30 {
      background-color: red;  
    }
  `]
})
export class AppComponent implements OnInit {

  constructor() {
    type User = {stringOutput: string};
  }

  name: string = 'João Felipe Zini';
  age: number = 28;
  increaseAge: boolean = false;
  showAge: boolean = false;
  userData = {
    stringOutput: '',
  }
  cards = [
    {message: 'Card 1'},
    {message: 'Card 2'},
    {message: 'Card 3'},
    {message: 'Card 4'},
  ];

  onAddCard() {
    this.cards.push({message: `Card ${this.cards.length + 1}`});
  }

  onIncreaseAge() {
    this.age++;
    this.showAge = true;
  }

  getClass() {
    if (this.age > 30) {
      return 'form-control'
    }
    return ''
  }

  getColor() {
    if (this.age > 30) {
      return 'yellowgreen'
    }
    return 'red'
  }

  ngOnInit() {
    setTimeout(() => {
      this.increaseAge = true;
    }, 3000);
  }
}
