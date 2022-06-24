import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Container } from 'src/app/entidad/container/container';
import { ContainerService } from 'src/app/service/container/container.service';

@Component({
  selector: 'app-update-container',
  templateUrl: './update-container.component.html',
  styleUrls: ['./update-container.component.css']
})
export class UpdateContainerComponent implements OnInit {

  public form!: FormGroup;
  @Input() container!: Container
  constructor(public fb: FormBuilder,public containerService: ContainerService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'marca': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      'capacidad': [],
      'codigo': [],
    });

    this.llenarCampos();
  }

  async aceptar()
  {
    console.log(this.container.id)
    this.container.capacidad = this.form.value.capacidad;
    this.container.marca = this.form.value.marca;
    await this.containerService.actualizarContainer(this.container).finally(()=>{
      this.form.reset();
    })
  }

  llenarCampos() {
    this.form.patchValue(this.container);
  }
}
