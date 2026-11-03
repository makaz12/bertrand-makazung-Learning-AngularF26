import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Guard } from '../services/guard/guard';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const guardService = inject(Guard);
  return guardService.guardEnabled() ? true : router.parseUrl('/');
};
