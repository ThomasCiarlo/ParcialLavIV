import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminyEmpGuard implements CanActivate {
  constructor(public serviceLogin: LoginService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
        if(this.serviceLogin.usuario != null){
          if(this.serviceLogin.usuario.tipo == 'admin' || this.serviceLogin.usuario.tipo == 'empleado')
            return true;
        }

        return false;
  }
  
}
