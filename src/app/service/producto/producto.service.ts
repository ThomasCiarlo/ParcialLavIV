import { Injectable } from '@angular/core';
import { Producto } from 'src/app/entidad/producto/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  Producto: Producto[] = [new Producto(1,'galletita',100,1,'argentina',true),new Producto(2,'veneno',100,3,'argentina',false)];

  constructor() { }
}
