import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/entidades/Peliculas/peliculas';
import { PeliculasServiceService } from 'src/app/service/peliculas/peliculas-service.service';
import { TablaPeliculaComponent } from 'src/app/component/tabla-pelicula/tabla-pelicula.component';
import { ProductoService } from 'src/app/service/producto/producto.service';
import { Producto } from 'src/app/entidad/producto/producto';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  productoSeleccionado!:Producto;

  constructor(public serviceProductos: ProductoService) { }

  ngOnInit(): void {
    this.serviceProductos.traerProductos();
  }

  tomarProducto(producto: Producto)
  {
    this.productoSeleccionado=producto;   
  }

}
