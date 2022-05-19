import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/entidades/Peliculas/peliculas';
import { PeliculasServiceService } from 'src/app/service/peliculas/peliculas-service.service';
import { TablaPeliculaComponent } from 'src/app/component/tabla-pelicula/tabla-pelicula.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  PeliParaMostrar?:Peliculas;

  constructor(public servicePelicula: PeliculasServiceService) { }

  ngOnInit(): void {
  }

  tomarPeliParaDetalles(Peliculas: Peliculas)
  {
    this.PeliParaMostrar=Peliculas;   
  }

}
