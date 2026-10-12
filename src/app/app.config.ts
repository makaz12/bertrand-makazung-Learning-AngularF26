import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { APP_CONFIG } from './config/app-config';
import { ProjectService } from './shared/services/project-service';
import { MockProjectService } from './shared/services/mockService/mock-project-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://apiUrl.com/api',
        defaultCategory: 'project'
      }
    },

    // {
    //   provide: ProjectService,
    //   useClass: MockProjectService
    // }
  ]
};
