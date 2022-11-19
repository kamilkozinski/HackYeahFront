import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.getToken()) {
      return this.router.createUrlTree(['/dashboard']);
    }
    else {
      return true
    }
  }

}
