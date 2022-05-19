import { Component, OnInit,Input } from '@angular/core';
import { Actores } from 'src/app/entidades/actores/actores';
import { ActoresServiceService } from 'src/app/service/actoresService/actores-service.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  paisSeleccionado!: string;
  actorNuevo? : Actores;

  constructor(public serviceActores: ActoresServiceService) { }

  ngOnInit(): void {
  }

  tomarPaisSeleccionado(pais: string)
  {
      this.paisSeleccionado = pais;
  }

  tomarnuevoActor(actor: Actores)
  {
    this.actorNuevo = actor;
    this.serviceActores.actores.push(this.actorNuevo);
  }

}
