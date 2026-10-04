import { Component, inject } from '@angular/core';
import { Project } from '../../shared/models/project';
import { ProjectCardListItem } from './project-card-list-item/project-card-list-item';
import { ContentEvent } from '../../shared/events/content-event';
import { ProjectService } from '../../shared/services/project-service';

@Component({
  imports: [ProjectCardListItem],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCardList {
  private projectService = inject(ProjectService);

  projectList = this.projectService.projectList;

  openedProjects: number[] = [];
  protected handleEvent($event: ContentEvent) {
    console.log(event);
  }
}
