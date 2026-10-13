import { Component, input, output } from '@angular/core';
import { Project } from '../../../shared/models/project';
import { ContentEvent } from '../../../shared/events/content-event';

@Component({
  imports: [],
  selector: 'app-project-card-list-item',
  styleUrl: './project-card-list-item.css',
  templateUrl: './project-card-list-item.html',
})
export class ProjectCardListItem {
  //receives projects from the projectList array
  project = input.required<Project>();

  //flows data up to the parent
  contentEvent = output<ContentEvent>();
  // opened = output<Project>()
  expanded = false;
  //emits the event action
  toggle(): void {
    this.contentEvent.emit({
      id: this.project().id,
      action: 'opened',
    });
  }

  isFirst = input(false);
  isLast = input(false);
}
