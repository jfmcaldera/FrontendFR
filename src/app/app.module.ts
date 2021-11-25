import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './Plantilla/barra-nav/barra-nav.component';
import { PiePagComponent } from './Plantilla/pie-pag/pie-pag.component';
import { InicioComponent } from './Plantilla/inicio/inicio.component';
import { ErrorComponent } from './Plantilla/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    PiePagComponent,
    InicioComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
