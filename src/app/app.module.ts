import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfertaListaComponent } from './oferta-lista/oferta-lista.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { ProductosComponent } from './productos/productos.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosListaComponent,
    OfertaListaComponent,
    ProductosComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
