import { Component, OnInit } from '@angular/core';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.scss']
})
export class ProductosListaComponent implements OnInit {

  producto = {
    name: "Coca-Cola",
    description: "Gaseosa 1,5L",
    price: "$180",
    image: "assets/coca-cola.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
