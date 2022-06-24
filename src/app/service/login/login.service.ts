import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 
import { Usuario } from 'src/app/entidad/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  usuario!: Usuario;
  constructor(public db: AngularFirestore) { }

  async login(usuario: Usuario)
  {
    this.db.collection<Usuario>('usuarios', ref => ref.where('email', '==' ,usuario.email).where('password', '==' ,usuario.password)).valueChanges()
    .subscribe(usuario => {
        if(usuario != null){
          this.usuario = usuario[0];
          console.log(this.usuario)
        }
    });
  }

  async desloguear()
  {
    this.usuario = null!;
  }
  
}
