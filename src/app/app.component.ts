import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

  onIncreaseAge() {
    this.age++;
    this.showAge = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.increaseAge = true;
    }, 3000);
  }
}
