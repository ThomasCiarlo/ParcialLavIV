import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import { PaisesServiceService } from 'src/app/service/paisesService/paises-service.service';
import { Observable } from 'rxjs';
import { BanderaService } from 'src/app/service/bandera/bandera.service';
import { Pais } from 'src/app/entidad/pais/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() PeliSeleccionado: EventEmitter<any>= new EventEmitter<any>();
  @Input() PaisFiltrado!: Pais;
  listaMostrar = {};

  misBanderas:any[]|undefined;
  misPaises:Observable<any>|undefined;

  constructor(public paises: PaisesServiceService,private servBandea: BanderaService) 
  {
      this.filtrarPais();
  }

  ngOnInit(): void {
    this.misPaises = this.servBandea.todos();
      if(this.PaisFiltrado != null)
        this.filtrarPais()
  }

  public enviarPais(nombre: string,imagen: string)
  {
    const pais: Pais = new Pais();
    pais.nombre = nombre;
    pais.bandera = imagen;
    this.PeliSeleccionado.emit(pais);
  }

  public filtrarPais()
  {
    let pais = null;

    if(this.PaisFiltrado != null){
      this.paises.paises.filter(pais => pais.Nombre == this.PaisFiltrado.nombre);
    }
  }

}
