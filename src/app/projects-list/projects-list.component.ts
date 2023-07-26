import { Component } from '@angular/core';
import projectsData from './projects.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {

  projectsData: {[key: string]: string}[] = projectsData;

}
