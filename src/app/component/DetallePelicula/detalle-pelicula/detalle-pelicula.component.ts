import { Component, OnInit,Input } from '@angular/core';
import { Producto } from 'src/app/entidad/producto/producto';
import { Peliculas } from 'src/app/entidades/Peliculas/peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() item!: Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
