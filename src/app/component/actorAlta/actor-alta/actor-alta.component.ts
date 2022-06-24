import { Component, OnInit,Input } from '@angular/core';
import { Pais } from 'src/app/entidad/pais/pais';
import { Producto } from 'src/app/entidad/producto/producto';
import { Actores } from 'src/app/entidades/actores/actores';
import { ActoresServiceService } from 'src/app/service/actoresService/actores-service.service';
import { GuardarService } from 'src/app/service/guardarDatos/guardar.service';
import { ProductoService } from 'src/app/service/producto/producto.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  paisSeleccionado!: Pais;
  productoNuevo? : Producto;

  constructor(public serviceActores: ActoresServiceService,public serviceProducto: ProductoService, public serviceGuardar: GuardarService) { }

  ngOnInit(): void {
    this.serviceProducto.traerProductos();
  }

  tomarPaisSeleccionado(pais: Pais)
  {
      this.paisSeleccionado = pais;
  }

  tomarnuevoActor(prod: Producto)
  {
    this.productoNuevo = prod;
    this.productoNuevo.pais = this.paisSeleccionado; 
    this.serviceGuardar.subirFirebaseProducto(this.productoNuevo);
    this.serviceProducto.Producto.push(this.productoNuevo);
  }

}
