import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfertaListaComponent } from './oferta-lista/oferta-lista.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosListaComponent,
    OfertaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
