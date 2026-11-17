import {Routes } from '@angular/router';
import {guardGuard} from './shared/guard/guard-guard';
import { Form } from './feature/form/form';

const routes: Routes = [
  {
    path: 'form',
    component: Form
  },
  {
    path: "project/edit/:projectId",
    component: Form,
    canActivate: [guardGuard]
  }
  ];

export default routes;
