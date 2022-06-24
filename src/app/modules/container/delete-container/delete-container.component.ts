import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Container } from 'src/app/entidad/container/container';
import { ContainerService } from 'src/app/service/container/container.service';

@Component({
  selector: 'app-delete-container',
  templateUrl: './delete-container.component.html',
  styleUrls: ['./delete-container.component.css']
})
export class DeleteContainerComponent implements OnInit {

  @Input() container!: Container
  constructor(public fb: FormBuilder,public containerService: ContainerService) { }

  ngOnInit(): void {
  }

  aceptar(){
    this.containerService.eliminarContainer(this.container);
  }

}
