import { Component, inject } from '@angular/core';
import { ProjectCardListItem } from './project-card-list-item/project-card-list-item';
import { ContentEvent } from '../../shared/events/content-event';
import { ProjectService } from '../../shared/services/project-service';
import { Project } from '../../shared/models/project';

@Component({
  imports: [ProjectCardListItem],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCardList {
  protected projectService = inject(ProjectService);

  projectList = this.projectService.projectList;

  openedProjects: number[] = [];
  //event handler reads from project item
  protected handleEvent(event: Project) {
    this.projectService.removeProject(event)
  }
}
