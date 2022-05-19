import { Component, OnInit,Input } from '@angular/core';
import { Peliculas } from 'src/app/entidades/Peliculas/peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() item: Peliculas | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
