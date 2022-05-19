import { Component, OnInit,Input } from '@angular/core';
import { Producto } from 'src/app/entidad/producto/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input() item: Producto | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  

}
