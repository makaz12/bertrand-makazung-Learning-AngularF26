import { Routes } from '@angular/router';
import { ProjectCardList } from './feature/project-card/project-card-list';
import { guardGuard } from './shared/guard/guard-guard';
import {projectResolver} from './shared/resolvers/project-resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectCardList },
  {
    path: 'project/:projectId',
    loadComponent: () =>
      import('./feature/project-detail/project-detail').then((m) => m.ProjectDetail),
    resolve: { project: projectResolver },
  },
  // {
  //   path: 'project/edit/:projectId',
  //   loadComponent: () => import('./feature/form/form').then((m) => m.Form),
  //   canActivate: [guardGuard],
  // },
  //
  // { path: 'form', loadComponent: () => import('./feature/form/form').then(m => m.Form) },

  {
    path: '',
    loadChildren: () => import('./project.route').then((m) => m.default),
  },
];
