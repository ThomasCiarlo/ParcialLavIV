import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 
import { LoginService } from '../login/login.service';
import { Producto } from 'src/app/entidad/producto/producto';


@Injectable({
  providedIn: 'root'
})
export class GuardarService {

  constructor( public db: AngularFirestore,public serviceLogin: LoginService)
  {


  }

  subirFirebaseProducto(producto: Producto) {
      if(this.serviceLogin.usuario != '')
        return this.crearFirebase(this.serviceLogin.usuario,JSON.stringify(producto));
  }


  crearFirebase(email: string, producto: string) {
    this.db.collection('productos').doc(this.db.createId()).set({
      email: email,
      producto: producto
    })
  }

}
