import { Injectable } from '@angular/core';
import { Producto } from 'src/app/entidad/producto/producto';
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  Producto: Producto[] = []

  constructor(public db: AngularFirestore) 
  {
  }

  async traerProductos()
  {
    this.db.collection<Producto>('productos').valueChanges().subscribe(productos => {
      this.Producto = productos;
    })
  }
}
