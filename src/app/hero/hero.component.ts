import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  stacks = [
    {name: 'React', url: '../../assets/img/stacks/react.png'},
    {name: 'Redux', url: '../../assets/img/stacks/redux.png'},
    {name: 'Angular', url: '../../assets/img/stacks/angular.png'},
    {name: 'JavaScript', url: '../../assets/img/stacks/javascript.png'},
    {name: 'TypeScript', url: '../../assets/img/stacks/typescript.png'},
    {name: 'HTML', url: '../../assets/img/stacks/html.png'},
    {name: 'CSS', url: '../../assets/img/stacks/css.png'},
    {name: 'SASS', url: '../../assets/img/stacks/sass.png'},
    {name: 'Bootstrap', url: '../../assets/img/stacks/bootstrap.png'},
    {name: 'Git', url: '../../assets/img/stacks/git.png'},
    {name: 'RTL', url: '../../assets/img/stacks/rtl.png'},
    {name: 'Jest', url: '../../assets/img/stacks/jest.png'},
    {name: 'Node.JS', url: '../../assets/img/stacks/nodejs.png'},
    {name: 'Express', url: '../../assets/img/stacks/express.png'},
    {name: 'MySQL', url: '../../assets/img/stacks/mysql.png'},
    {name: 'Docker', url: '../../assets/img/stacks/docker.png'},
  ]
}
