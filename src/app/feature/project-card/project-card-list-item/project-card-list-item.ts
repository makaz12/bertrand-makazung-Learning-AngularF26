import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-project-card-list-item',
  styleUrl: './project-card-list-item.css',
  templateUrl: './project-card-list-item.html',
})
export class ProjectCardListItem {
  project = input<ProjectCardListItem>();
}
