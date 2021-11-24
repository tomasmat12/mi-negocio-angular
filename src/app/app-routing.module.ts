import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
    { path: '',redirectTo: 'producto',pathMatch: 'full' },
    { path: 'producto', component: ProductosComponent },
    { path: 'about', component: AboutUsComponent },
];
   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
