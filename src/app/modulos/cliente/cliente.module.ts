import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { CrearclienteComponent } from './registro/crearcliente/crearcliente.component';


@NgModule({
  declarations: [
    
    RegistroComponent,
         CrearclienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
