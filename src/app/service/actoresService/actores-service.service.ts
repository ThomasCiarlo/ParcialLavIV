import { Injectable } from '@angular/core';
import { Actores } from 'src/app/entidades/actores/actores';

@Injectable({
  providedIn: 'root'
})
export class ActoresServiceService {

  actores = [new Actores('Owen','Wilson','argentina'), new Actores('Dan','Castellaneta','argentina')]

  constructor() { }
}
