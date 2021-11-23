import { Component, OnInit } from '@angular/core';
import { oferta } from './oferta';

@Component({
  selector: 'oferta-lista',
  templateUrl: './oferta-lista.component.html',
  styleUrls: ['./oferta-lista.component.scss']
})
export class OfertaListaComponent implements OnInit {

  oferta : oferta [] = [{
    name: "Sprite",
    description: "Sprite 1,5L",
    price: 150,
    image: "assets/sprite.png"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
