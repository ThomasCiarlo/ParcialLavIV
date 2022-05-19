import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Actores } from 'src/app/entidades/actores/actores';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  @Input() item: Actores[] | undefined;
  @Input() muestroBoton: boolean | undefined;

  @Output() ActorSeleccionado: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalles(actor:Actores)
  {
    console.info("mostrar detalles",actor);
    this.ActorSeleccionado.emit(actor);
  }



}
