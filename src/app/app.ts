import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorService } from './shared/errorService/error-service';
import { PreferedService } from './shared/preferedService/prefered-service';


@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  errorService = inject(ErrorService);
  readonly preferedService = inject(PreferedService);
}
