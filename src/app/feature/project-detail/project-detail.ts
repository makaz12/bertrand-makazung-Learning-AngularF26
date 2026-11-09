import { Component, computed, inject, input, signal } from '@angular/core';
import { ProjectService } from '../../shared/services/project-service'
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../shared/models/project';

@Component({
  imports: [],
  selector: 'app-project-detail',
  styleUrl: './project-detail.css',
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);

  // id = Number(this.route.snapshot.paramMap.get('id'));
  projectId = input.required<string>();
  private service = inject(ProjectService);

  detail = computed(() => this.service.projectList().find((b) => b.id === this.projectId()));

  // detail = signal<Project | undefined>(
  //   this.route.snapshot.data[`project`]
  // )
  constructor() {
    console.log(this.route.snapshot.data['project']);
  }
}
