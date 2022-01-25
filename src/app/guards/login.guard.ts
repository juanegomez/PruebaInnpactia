import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor
  (
    private router: Router
    ){}

  canActivate(){

    const login = localStorage.getItem('isLogin');
    if (login && login === 'true') {
      console.log('Sesion Iniciada');
      this.router.navigate(['home']);
      return false;
    }
    return true;

    }

}
