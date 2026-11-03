import { Component, computed, inject, input} from '@angular/core';
import { ProjectService } from '../../shared/services/project-service'
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-project-detail',
  styleUrl: './project-detail.css',
  templateUrl: './project-detail.html',
})
export class ProjectDetail {


// private route = inject(ActivatedRoute);

// id = Number(this.route.snapshot.paramMap.get('id'));
  projectId = input.required<string>();
  private service = inject(ProjectService);

  detail = computed(() => this.service.projectList().find((b) => b.id === Number(this.projectId())));


}
