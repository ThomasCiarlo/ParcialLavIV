import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Producto } from 'src/app/entidad/producto/producto';
import { Actores } from 'src/app/entidades/actores/actores';
import { ActoresServiceService } from 'src/app/service/actoresService/actores-service.service';

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent implements OnInit {

  @Input() pais!: string;
  @Output() actorNuevo: EventEmitter<any>= new EventEmitter<any>();

  public form!: FormGroup;

  constructor(public fb: FormBuilder, public serviceActor : ActoresServiceService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      'descripcion': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      'precio': [],
      'comestible': []
    });
  }

  public aceptar()
  {
    const {descripcion,precio,comestible} = this.form.value;
    this.actorNuevo.emit(new Producto(3,descripcion,precio,0,this.pais,comestible));
    this.form.reset();

  }

}
