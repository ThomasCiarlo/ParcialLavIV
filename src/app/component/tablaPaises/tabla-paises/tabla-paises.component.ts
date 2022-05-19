import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { PaisesServiceService } from 'src/app/service/paisesService/paises-service.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() PeliSeleccionado: EventEmitter<any>= new EventEmitter<any>();

  constructor(public paises: PaisesServiceService) { }

  ngOnInit(): void {
  }

  public enviarPais(pais: string)
  {
    console.info("mostrar detalles",pais);
    this.PeliSeleccionado.emit(pais);
  }

}
