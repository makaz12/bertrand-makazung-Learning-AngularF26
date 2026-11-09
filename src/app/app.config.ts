import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { APP_CONFIG } from './config/app-config';
import { ProjectService } from './shared/services/project-service';
import { MockProjectService } from './shared/services/mockService/mock-project-service';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {loaderInterceptor} from './shared/loaderInterceptor/loader-interceptor-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),

    provideHttpClient(
      withInterceptors([loaderInterceptor])
    ),


    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://api.github.com',
        defaultCategory: 'project',
      },
    },

    //
    // {
    //   provide: ProjectService,
    //   useClass: MockProjectService
    // }
  ],
};
