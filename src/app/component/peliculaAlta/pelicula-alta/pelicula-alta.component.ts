import { Component, OnInit } from '@angular/core';
import { Actores } from 'src/app/entidades/actores/actores';
import { Peliculas } from 'src/app/entidades/Peliculas/peliculas';
import { ActoresServiceService } from 'src/app/service/actoresService/actores-service.service';
import { PeliculasServiceService } from 'src/app/service/peliculas/peliculas-service.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  actorSeleccionado?: Actores;

  constructor(public serviceActores:ActoresServiceService,public servicePeliculas: PeliculasServiceService) { }

  ngOnInit(): void {
  }

  tomarActor(actor: Actores)
  {
    this.actorSeleccionado = actor;
  }

  AltaPelicula(peli: Peliculas)
  {
    console.log(peli);
    this.servicePeliculas.peliculas.push(peli);
  }

}
