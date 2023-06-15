import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const loginRedirectGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const oauthService: AuthServiceService = inject(AuthServiceService);

  if (oauthService.isLogin()) {
    router.navigate(['/admin']);
    return false;
  }
  return true;
};

