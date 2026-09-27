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
  project = input.required<Project>();

  contentEvent = output<ContentEvent>();
  // opened = output<Project>()
  expanded = false;
  toggle(): void {
    this.contentEvent.emit({
      id: this.project().id,
      action: 'opened',
    });
  }
}
