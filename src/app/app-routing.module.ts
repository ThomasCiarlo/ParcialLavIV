import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './component/actorAlta/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './component/actorListado/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './component/bienvenido/bienvenido/bienvenido.component';
import { BusquedaProductoComponent } from './component/busqueda-producto/busqueda-producto.component';
import { BusquedaComponent } from './component/busqueda/busqueda/busqueda.component';
import { LoginComponent } from './component/login/login.component';
import { PeliculaAltaComponent } from './component/peliculaAlta/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './component/peliculaListado/pelicula-listado/pelicula-listado.component';
import { AdminGuard } from './guard/admin.guard';
import { AdminyEmpGuard } from './guard/adminy-emp.guard';

const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent },
  {
    path: 'producto/alta', component: ActorAltaComponent,
    canActivate: [AdminyEmpGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'busquedaProducto', component: BusquedaComponent,
    canActivate: [AdminyEmpGuard]
  },
  {
    path: 'container', loadChildren: () => import('./modules/container/container.module').then(m => m.ContainerModule),
    canActivate: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
