import { Component, inject } from '@angular/core';
import { ProjectCardListItem } from './project-card-list-item/project-card-list-item';
import { ContentEvent } from '../../shared/events/content-event';
import { ProjectService } from '../../shared/services/project-service';
import { RouterLink, RouterOutlet} from '@angular/router';
import { form } from '@angular/forms/signals';
import { Guard } from '../../shared/services/guard/guard';
import { LoadingService } from '../../shared/loadingService/loading-service';


@Component({
  imports: [ProjectCardListItem, RouterLink],

  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCardList {
  protected projectService = inject(ProjectService);

  projectList = this.projectService.projectList;

  guard = inject(Guard);

  loadingService = inject(LoadingService);

  openedProjects: number[] = [];
  //event handler reads from project item
  protected handleEvent(event: ContentEvent) {
    this.projectService.removeProject(event.id);
  }

  protected readonly form = form;
}
