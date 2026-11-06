import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiBaseUrl: string;
  defaultCategory: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('https://api.github.com/users/makaz12/repos');
