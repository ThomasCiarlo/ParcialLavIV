import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import { Peliculas } from 'src/app/entidades/Peliculas/peliculas';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() item: Peliculas[] | undefined;
  @Output() PeliSeleccionado: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalles(peli:Peliculas)
  {
    console.info("mostrar detalles",peli);
    this.PeliSeleccionado.emit(peli);
  }

}
