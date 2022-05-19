import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entidad/producto/producto';
import { ProductoService } from 'src/app/service/producto/producto.service';

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent implements OnInit {

  prod!: Producto;
  constructor(public serviceProducto: ProductoService) { }

  ngOnInit(): void {
  }

  tomarPeliParaDetalles(Peliculas: Producto)
  {
    this.prod=Peliculas;   
  }

}
