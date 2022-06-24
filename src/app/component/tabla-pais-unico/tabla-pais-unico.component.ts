import { Component, OnInit, Input } from '@angular/core';
import { Pais } from 'src/app/entidad/pais/pais';

@Component({
  selector: 'app-tabla-pais-unico',
  templateUrl: './tabla-pais-unico.component.html',
  styleUrls: ['./tabla-pais-unico.component.css']
})
export class TablaPaisUnicoComponent implements OnInit {

  @Input() pais!: Pais
  constructor() { }

  ngOnInit(): void {
  }

}
