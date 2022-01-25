import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor
  (
    private router: Router
    ){}


  canActivate(){
    const login = localStorage.getItem('isLogin');
    if (!login && login !== 'true') {
      console.log('No se pudo realizar el login.');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
