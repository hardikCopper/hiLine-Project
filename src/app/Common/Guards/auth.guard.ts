import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const oauthService: AuthServiceService = inject(AuthServiceService);

  if (oauthService.isLogin()) {
    return true;
  }
  router.navigate(['/']);
  return false;
};
