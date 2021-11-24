import { Component, OnInit } from '@angular/core';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { ProductoDataService } from '../producto-data.service';
import { producto } from './producto';

@Component({
  selector: 'productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.scss']
})
export class ProductosListaComponent implements OnInit {

  producto : producto [] = [];
  
//  [{
//    name: "Coca-Cola",
//    description: "Gaseosa 1,5L",
//    price: 180,
//    image: "assets/coca-cola.jpg"
//  },
//  {
//    name: "Palermo",
//    description: "Cerveza",
//    price: 170,
//    image: "assets/palermo.jpg"
//  }]

  constructor(private productoDataService: ProductoDataService) { }

  ngOnInit(): void {
    this.productoDataService.getAll().subscribe( producto => this.producto = producto)
  }

}
