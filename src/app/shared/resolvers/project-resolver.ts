import { ResolveFn } from '@angular/router';
import {inject} from '@angular/core';
import {ProjectService} from '../services/project-service';
import {Project} from '../models/project';
import { map } from 'rxjs';

export const projectResolver: ResolveFn<Project | undefined> = (route, state) => {
  const service = inject(ProjectService);
  const id = route.paramMap.get('projectId')
  return service.getProject().pipe(map((list) => list.find((project) => String(project.id) === id)));};
