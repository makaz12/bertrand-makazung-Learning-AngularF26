import { Component, computed, inject } from '@angular/core';
import { SavedService } from '../../../shared/savedService/saved-service';
import { ProjectService } from '../../../shared/services/project-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-saved',
  styleUrl: './saved.css',
  templateUrl: './saved.html',
})
export class Saved {
  savedService = inject(SavedService);
  projectService = inject(ProjectService);

  savedPrject = computed(() =>
    this.projectService
      .projectList()
      .filter((project) => this.savedService.savedList().includes(project.id)),
  );
}
