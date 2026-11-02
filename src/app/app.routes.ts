import { Routes } from '@angular/router';
import { ProjectCardList } from './feature/project-card/project-card-list';
import { ProjectDetail } from './feature/project-detail/project-detail';
import { Form } from './feature/form/form';

export const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {path:'projects', component:ProjectCardList},
  {path:'project/:projectId', component:ProjectDetail},
  {path:'project/edit/:projectId', component:Form},
  {path:'form', component:Form}
];
