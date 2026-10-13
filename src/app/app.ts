import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Project} from "./shared/models/project";
import { ProjectCardList } from './feature/project-card/project-card-list';
import { ExperienceList } from './feature/experience-list/experience-list';


@Component({
  imports: [RouterOutlet, ProjectCardList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
