import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Peliculas } from 'src/app/entidades/Peliculas/peliculas';

@Component({
  selector: 'app-form-alta-peli',
  templateUrl: './form-alta-peli.component.html',
  styleUrls: ['./form-alta-peli.component.css']
})
export class FormAltaPeliComponent implements OnInit {

  public form!: FormGroup;

  @Input() actor!: string;
  @Output() PeliNueva: EventEmitter<any>= new EventEmitter<any>();

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      'Titulo': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      'Actor': ['', Validators.required,Validators.minLength(3), Validators.maxLength(50)],
      'Tipo': ['', [Validators.required]],
      'Imagen': ['', [Validators.required]]
    });

  }

  aceptar()
  {
    const {Titulo,Tipo,Actor,Imagen} = this.form.value;
    const peli = new Peliculas(4,Titulo,Tipo,this.actor,"../../../assets/img/" + Imagen.split("\\")[2]);

    console.log(peli);

    this.PeliNueva.emit(peli);

    this.form.reset();
  }

}
