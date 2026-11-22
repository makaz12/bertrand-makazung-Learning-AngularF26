import { Component, computed, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { ProjectService } from '../../shared/services/project-service'
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../shared/models/project';
import { timeInterval } from 'rxjs';
import { HighLight } from '../../shared/directives/highLight/high-light';
import { SavedService } from '../../shared/savedService/saved-service';

@Component({
  selector: 'app-project-detail',
  styleUrl: './project-detail.css',
  templateUrl: './project-detail.html',
  imports: [HighLight],
})
export class ProjectDetail implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  openedAt = signal<Date>(new Date());
  closedAt = signal<Date | null>(null);

  // id = Number(this.route.snapshot.paramMap.get('id'));
  projectId = input.required<string>();
  private service = inject(ProjectService);

  //saved detail
  readonly saved = inject(SavedService)

  detail = computed(() => this.service.projectList().find((b) => b.id === this.projectId()));

  // detail = signal<Project | undefined>(
  //   this.route.snapshot.data[`project`]
  // )
  constructor() {
    console.log(this.route.snapshot.data['project']);
  }

  ngOnInit() {
    const id = this.projectId();
    const project = this.service.projectList().find((p) => String(p.id) == id);

    if (project) {
      console.log(`LifeCycle: opened: ${project.name} at ${this.openedAt().getTime()}`);
    }
  }

  ngOnDestroy() {
    const now = new Date();
    this.openedAt.set(now);
    const id = this.projectId();
    const timeSpent = now.getTime() - this.openedAt().getTime();
    const project = this.service.projectList().find((p) => String(p.id) == id);

    if (project) {
      console.log(`LifeCycle: closed: ${project.name} after ${timeSpent}`);
    }
  }

  isSaved(){

  }
}
