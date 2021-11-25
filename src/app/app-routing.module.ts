import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Plantilla/error/error.component';
import { InicioComponent } from './Plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "inicio",
    component:InicioComponent
  },
  {
    path:"",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'cliente',
    loadChildren: () => import("./modulos/cliente/cliente.module").then(x=> x.ClienteModule)
  },
  {
    path: "**",
    component: ErrorComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
