import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css', '../projects-list.component.css']
})
export class ProjectComponent {
  @Input() projectData: {[key: string]: string};
  safeVideoUrl: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeVideoUrl = this.getSafeVideoUrl();
  }
  
  getSafeVideoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.projectData.video);
  }
}
