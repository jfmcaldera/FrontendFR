import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearclienteComponent } from './registro/crearcliente/crearcliente.component';


const routes: Routes = [
  {
    path: 'crearcliente',
    component: CrearclienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
