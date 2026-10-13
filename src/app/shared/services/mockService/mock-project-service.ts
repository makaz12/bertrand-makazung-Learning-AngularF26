import { computed, Injectable, signal } from '@angular/core';
import { Project } from '../../models/project';

@Injectable()
export class MockProjectService {
  projects = signal<Project[]>([
    {
      id: 500,
      name: 'Mock project',
      imagePath: '/images/mock.png',
      description: 'Mock project description',
      programmingLanguages: ['typescript'],
      tools: ['Anglar, phpStorm'],
      skills: ['Token Injection'],
      status: 'completed'
    }
  ]);

  removeProject(id: number): void{
    this.projects.update(list => list.filter(p => p.id !== id))
  }
  projectList = this.projects.asReadonly();

  inProgressCount = computed(
    () => this.projects().filter(p => p.status === 'in-progress').length
  );

  completedCount = computed(
    () => this.projects().filter(p => p.status === 'completed').length
  );

  displayUrl = computed(
    () => 'Data source: https://mockapi.com/api'
  );
}

