import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  estalogueado = false;
  constructor() { }


  login(user: string,password: string)
  {
    if('admin' == user && '1234' == password){
      this.estalogueado = true;
      return true;
    }

    if('empleado' == user && '1234' == password){
      this.estalogueado = true;
      return true;
    }

    return false;
  }




}
