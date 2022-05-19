import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './component/bienvenido/bienvenido/bienvenido.component';
import { BusquedaComponent } from './component/busqueda/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './component/peliculaAlta/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './component/actorAlta/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './component/actorListado/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './component/peliculaListado/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './component/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './component/DetallePelicula/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './component/tablaPaises/tabla-paises/tabla-paises.component';
import { FormAltaComponent } from './component/form-alta/form-alta.component';

import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormAltaPeliComponent } from './component/form-alta-peli/form-alta-peli.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    FormAltaComponent,
    FormAltaPeliComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
