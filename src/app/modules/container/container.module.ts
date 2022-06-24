import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { NuevoContainerComponent } from './nuevo-container/nuevo-container.component';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ListaContainerComponent } from './lista-container/lista-container.component';
import { UpdateContainerComponent } from './update-container/update-container.component';
import { DeleteContainerComponent } from './delete-container/delete-container.component';

@NgModule({
  declarations: [
    ContainerComponent,
    NuevoContainerComponent,
    ListaContainerComponent,
    UpdateContainerComponent,
    DeleteContainerComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ContainerModule { }
