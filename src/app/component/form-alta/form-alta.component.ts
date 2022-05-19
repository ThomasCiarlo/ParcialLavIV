import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
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
      'nombre': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      'apellido': ['', Validators.required,Validators.minLength(3), Validators.maxLength(20)],
      'bandera': ['', [Validators.required]]
    });
  }

  public aceptar()
  {
    const {nombre,apellido} = this.form.value;
    this.actorNuevo.emit(new Actores(nombre,apellido,this.pais));
    this.form.reset();

  }

}
