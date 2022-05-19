import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './component/actorAlta/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './component/actorListado/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './component/bienvenido/bienvenido/bienvenido.component';
import { BusquedaComponent } from './component/busqueda/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './component/peliculaAlta/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './component/peliculaListado/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'pelicula/alta', component: PeliculaAltaComponent },
  { path: 'actor/alta', component: ActorAltaComponent },
  { path: 'actor/listado', component: ActorListadoComponent },
  { path: 'pelicula/listado', component: PeliculaListadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
