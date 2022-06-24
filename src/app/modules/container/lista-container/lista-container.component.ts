import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Container } from 'src/app/entidad/container/container';
import { ContainerService } from 'src/app/service/container/container.service';

@Component({
  selector: 'app-lista-container',
  templateUrl: './lista-container.component.html',
  styleUrls: ['./lista-container.component.css']
})
export class ListaContainerComponent implements OnInit {

  @Output() containerSeleccionado: EventEmitter<any>= new EventEmitter<any>();
  constructor(public traigoContainer: ContainerService) { }

  ngOnInit(): void {
    this.traigoContainer.traerContainers();
  }

  enviarContainer(cont: Container)
  {
    this.containerSeleccionado.emit(cont);
  }

}
