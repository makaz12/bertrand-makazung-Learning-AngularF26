import { Routes } from '@angular/router';
import { ProjectCardList } from './feature/project-card/project-card-list';
import { ProjectDetail } from './feature/project-detail/project-detail';
import { Form } from './feature/form/form';
import { guardGuard } from './shared/guard/guard-guard';
import {projectResolver} from './shared/resolvers/project-resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {path:'projects', component:ProjectCardList},
  {path:'project/:projectId', component:ProjectDetail, resolve: {project: projectResolver}},
  {path:'project/edit/:projectId', component:Form, canActivate:[guardGuard]},

  {path:'form', component:Form}
];
