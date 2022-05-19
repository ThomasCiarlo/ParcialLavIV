import { Injectable } from '@angular/core';
import { Peliculas } from 'src/app/entidades/Peliculas/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {

  peliculas: Peliculas[] = [new Peliculas(1,'cars','animada','Owen, wilson',"../../../assets/img/cars.jpg"),new Peliculas(2,'simpson','animada','Dan, Castellaneta',"../../../assets/img/simpson.jpg")];

  constructor() { }
}
