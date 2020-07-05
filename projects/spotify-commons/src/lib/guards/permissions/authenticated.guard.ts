import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SpotifyAuthenticatedGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

   if (sessionStorage.getItem('token') != null) {
            console.log('Autenticado');
            return true;
        }
   console.log('No autenticado');
   this.router.navigate(['/login']);
   return false;
    }
}
