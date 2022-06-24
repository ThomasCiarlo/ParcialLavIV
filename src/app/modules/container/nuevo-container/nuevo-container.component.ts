import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Container } from 'src/app/entidad/container/container';

@Component({
  selector: 'app-nuevo-container',
  templateUrl: './nuevo-container.component.html',
  styleUrls: ['./nuevo-container.component.css']
})
export class NuevoContainerComponent implements OnInit {

  public form!: FormGroup;
  @Output() container: EventEmitter<any>= new EventEmitter<any>();
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'Marca': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      'Capacidad': [],
      'Codigo': [],
    });
  }

  aceptar()
  {
    const nuevoContainer: Container = new Container();
    nuevoContainer.capacidad = this.form.value.Capacidad;
    nuevoContainer.marca = this.form.value.Marca;
    nuevoContainer.codigo = this.form.value.Codigo;

    this.container.emit(nuevoContainer);
    this.form.reset();
  }

}
