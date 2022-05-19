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

import {HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginComponent } from './component/login/login.component';
import { ConsumidorApiComponent } from './component/consumidor-api/consumidor-api.component';
import { DetalleProductoComponent } from './component/detalle-producto/detalle-producto.component';
import { BusquedaProductoComponent } from './component/busqueda-producto/busqueda-producto.component';

import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';


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
    LoginComponent,
    ConsumidorApiComponent,
    DetalleProductoComponent,
    BusquedaProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
