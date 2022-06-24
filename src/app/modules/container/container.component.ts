import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/entidad/container/container';
import { GuardarService } from 'src/app/service/guardarDatos/guardar.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  container!: Container;
  containerSeleccionado!: Container;

  constructor(public guardarDatos: GuardarService) { }

  ngOnInit(): void {
  }

  tomarNuevoContainer(container: Container)
  {   
      this.guardarDatos.crearContainer(container);
      console.log(container);
  }

  tomarContSeleccionado(cont: Container)
  {
      this.containerSeleccionado = cont
  }

}
