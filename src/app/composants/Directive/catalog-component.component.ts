import { Component, OnInit } from '@angular/core';
import { Product } from './model/product.model';

@Component({
  selector: 'app-catalog-component',
  templateUrl: './catalog-component.component.html',
  styleUrls: ['./catalog-component.component.css']
})
export class CatalogComponentComponent implements OnInit {

  constructor() { }
  catalogues: Product[]=[
    {id:1, name: "Produit(Prix-Promo)", price: 25, promo: 20},
    {id:2, name: "Produit(Prix)", price: 50,},
    {id:3, name: "Reste"},
  ]
  
  ngOnInit(): void {
  }

}
