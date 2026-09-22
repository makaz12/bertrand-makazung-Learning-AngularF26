import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Project} from "./shared/models/project";

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {



  protected projectList: Project[] = [
    {
      id: 1,
      name: 'Form App',
      imagePath: '../../public/images/Screenshot 2026-04-03 234326.png',
      description: 'A form generator cli application entirely written in java',
      programmingLanguages: ['java'],
      tools: ['vsCode', 'maven', 'jdk version 21'],
      skills: ['project management', 'environment setup'],
      status: "in-progress"
    },

    {
      id: 2,
      name: 'Expense tracker',
      imagePath: '../../public/images/expense-tracker.png',
      description: 'A small expense tracker built with HTML, CSS and JavaScript',
      programmingLanguages: ['html', 'css', 'javascript'],
      tools: ['vsCode', 'git'],
      skills: ['dom manipulation', 'event handling', 'data management'],
      status: 'completed',
      display: true
    },

    {
      id: 3,
      name: 'todo app',
      imagePath: '../../public/images/todo-app.png',
      description: 'A simple todo application built with React',
      programmingLanguages: ['javascript', 'html', 'css'],
      tools: ['vsCode', 'react', 'npm'],
      skills: ['component development', 'state management', 'event handling'],
      status: 'completed'
    },

    {
      id: 4,
      name: 'Simon memory game',
      imagePath: '../../public/images/simon-game.png',
      description: 'A small Simon memory game built with HTML, CSS and JavaScript',
      programmingLanguages: ['html', 'css', 'javascript'],
      tools: ['vsCode', 'git'],
      skills: ['game logic', 'event handling', 'dom manipulation'],
      status: 'in-progress'
    },

    {
      id: 5,
      name: 'House service',
      imagePath: '../../public/images/node-webserver.png',
      description: 'A simple web server built with Node.js',
      programmingLanguages: ['javascript'],
      tools: ['vsCode', 'nodeJs', 'npm'],
      skills: ['server-side programming', 'http protocols', 'request handling'],
      status: 'completed'
    },

    {
      id: 6,
      name: 'Rental website',
      imagePath: '../../public/images/rental-website.png',
      description: 'A small rental website built with React',
      programmingLanguages: ['javascript', 'html', 'css'],
      tools: ['vsCode', 'react', 'npm'],
      skills: ['component development', 'responsive design', 'state management'],
      status: 'completed'
    }

  ]

}
