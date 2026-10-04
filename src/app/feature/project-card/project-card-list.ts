import { Component } from '@angular/core';
import { Project } from '../../shared/models/project';
import { ProjectCardListItem } from './project-card-list-item/project-card-list-item';
import { ContentEvent } from '../../shared/events/content-event';

@Component({
  imports: [ProjectCardListItem],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCardList {

  openedProjects: number[] = [];
  protected handleEvent($event: ContentEvent) {
    console.log(event);
  }
}
