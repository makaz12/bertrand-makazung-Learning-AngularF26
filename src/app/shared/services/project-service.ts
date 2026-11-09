import {signal, computed,  inject, Injectable } from '@angular/core';
import {Project} from '../models/project';
import { APP_CONFIG } from '../../config/app-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private project = signal<Project[]>([
    {
      id: '1',
      private: false,
      html_url: '',

      name: 'Form App',
      imagePath: '/images/m1.png',
      description: 'A form generator cli application entirely written in java',
      languages: ['java'],
      tools: ['vsCode', 'maven', 'jdk version 21'],
      skills: ['project management', 'environment setup'],
      status: 'in-progress',
    },

    {
      id: '2',
      private: false,
      html_url: '',
      name: 'Expense tracker',
      imagePath: '/images/expense_tracker.png',
      description: 'A small expense tracker built with HTML, CSS and JavaScript',
      languages: ['html', 'css', 'javascript'],
      tools: ['vsCode', 'git'],
      skills: ['dom manipulation', 'event handling', 'data management'],
      status: 'completed',
    },

    {
      id: '3',
      private: false,
      html_url: '',

      name: 'todo app',
      imagePath: '/images/todo_app.png',
      description: 'A simple todo application built with React',
      languages: ['javascript', 'html', 'css'],
      tools: ['vsCode', 'react', 'npm'],
      skills: ['component development', 'state management', 'event handling'],
      status: 'completed',
    },

    {
      id: '4',
      private: false,
      html_url: '',
      name: 'Simon memory game',
      imagePath: '/images/simon_game.png',
      description: 'A small Simon memory game built with HTML, CSS and JavaScript',
      languages: ['html', 'css', 'javascript'],
      tools: ['vsCode', 'git'],
      skills: ['game logic', 'event handling', 'dom manipulation'],
      status: 'in-progress',
    },

    {
      id: '5',
      private: false,
      html_url: '',
      name: 'House service',
      imagePath: '/images/house_service1.png',
      description: 'A simple web server built with Node.js',
      languages: ['javascript'],
      tools: ['vsCode', 'nodeJs', 'npm'],
      skills: ['server-side programming', 'http protocols', 'request handling'],
      status: 'completed',
    },

    {
      id: '6',
      private: false,
      html_url: '',
      name: 'Rental website',
      imagePath: '/images/rental_site.png',
      description: 'A small rental website built with React',
      languages: ['javascript', 'html', 'css'],
      tools: ['vsCode', 'react', 'npm'],
      skills: ['component development', 'responsive design', 'state management'],
      status: 'completed',
    },
  ]);

  //   effect(() => {
  //   console.log('There are now', this.project().length);
  // })

  private http = inject(HttpClient);
  private config = inject(APP_CONFIG);
  loading = signal(false);

  error = signal<string | null>(null);

  projectList = this.project.asReadonly();

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set(null);

    this.http
      .get<Project[]>(`${this.config.apiBaseUrl}/users/makaz12/repos`, {
        params: { per_page: 20 },
      })
      .subscribe({
        next: (list) => {
          this.project.set(list);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Could not load data.');
          this.loading.set(false);
        },
      });
  }

  //adds a project
  addProject(p: Project) {
    this.project.update((list) => [...list, p]);
  }

  //get a prject
  getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.config.apiBaseUrl}/users/makaz12/repos`, {
      params: { per_page: 20 },
    });
  }

  //removes a project
  removeProject(id: number) {
    this.project.update((list) => list.filter((i) => Number(i.id) !== id));
  }

  updateProject(id: number, changes: Partial<Project>): void {
    this.project.update((projects) =>
      projects.map((project) => (Number(project.id) === id ? { ...project, ...changes } : project)),
    );
  }

  //counts the number of projects in progress
  inProgressCount = computed(
    () => this.project().filter((project) => project.status == 'in-progress').length,
  );

  inProgressMessage = computed(() => `There are ${this.inProgressCount()} projects in progress.`);

  //counts the number of projects completed
  completedCount = computed(
    () => this.project().filter((project) => project.status == 'completed').length,
  );

  completedMessage = computed(() => `There are ${this.completedCount()} projects in progress.`);

  effect() {
    console.log('There are now', this.project().length);
  }

  displayUrl = computed(() => `Data source: ${this.config.apiBaseUrl}`);
}
