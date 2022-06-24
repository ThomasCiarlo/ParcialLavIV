import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 
import { LoginService } from '../login/login.service';
import { Producto } from 'src/app/entidad/producto/producto';
import { Usuario } from 'src/app/entidad/usuario/usuario';
import { Container } from 'src/app/entidad/container/container';


@Injectable({
  providedIn: 'root'
})
export class GuardarService {

  constructor( public db: AngularFirestore,public serviceLogin: LoginService)
  {


  }

  crearUsuario(usuario: Usuario)
  {
    this.db.collection('usuarios').doc(this.db.createId()).set(usuario)
  }

  subirFirebaseProducto(producto: Producto) {
      return this.crearFirebase(producto);
  }


  crearFirebase(producto: Producto) {
    this.db.collection('productos').doc(this.db.createId()).set({
      codigo: producto.codigo,
      descripcion: producto.descripcion,
      precio:producto.precio,
      stock: producto.stock,
      comestible: producto.comestible,
      pais: Object.assign({},producto.pais)
    })
  }

  crearContainer(cont: Container) {
    let id = this.db.createId();
    this.db.collection('container').doc(id).set({
      codigo: cont.codigo,
      marca: cont.marca,
      capacidad: cont.capacidad,
      id: id
    })
  }

}
