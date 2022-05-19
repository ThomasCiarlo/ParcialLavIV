import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  paises = [{Nombre: 'ARGENTINA', bandera: 'celeste y blanca'},{Nombre: 'BRASIL', bandera: 'AMARILLA y VERDE'}]

  constructor() { }
}
