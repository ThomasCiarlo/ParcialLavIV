import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import { Producto } from 'src/app/entidad/producto/producto';
import { Peliculas } from 'src/app/entidades/Peliculas/peliculas';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() item!: Producto[];
  @Output() productoSeleccionado: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalles(producto:Producto)
  {
    this.productoSeleccionado.emit(producto);
  }

}
