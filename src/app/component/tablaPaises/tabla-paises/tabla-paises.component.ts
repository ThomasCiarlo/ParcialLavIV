import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import { PaisesServiceService } from 'src/app/service/paisesService/paises-service.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() PeliSeleccionado: EventEmitter<any>= new EventEmitter<any>();
  @Input() PaisFiltrado!: string;
  listaMostrar = {};

  constructor(public paises: PaisesServiceService) 
  {
      this.filtrarPais();
  }

  ngOnInit(): void {
  }

  public enviarPais(pais: string)
  {
    console.info("mostrar detalles",pais);
    this.PeliSeleccionado.emit(pais);
  }

  public filtrarPais()
  {
    let pais = null;

    if(this.PaisFiltrado != null){
     this.paises.paises.filter(pais => pais.Nombre == this.PaisFiltrado);
    }
  }

}
