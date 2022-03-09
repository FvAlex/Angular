import { Component, OnInit } from '@angular/core';
import { Product } from './model/produit-catalogue.model';

@Component({
  selector: 'app-catalogue-product',
  templateUrl: './catalogue-product.component.html',
  styleUrls: ['./catalogue-product.component.css']
})
export class CatalogueProductComponent implements OnInit {

  constructor() { }


  catalogues: Product[] = [
    {id: 1, name: "Pomme"},
    {id: 2, name: "Poire"},
    {id: 3, name: "Orange"},
    {id: 4, name: "Citron"} 
  ];
 
  DeleteProduct(product: Product) {
      this.catalogues.splice(this.catalogues.findIndex(p => p.id === product.id), 1)
  }
  ngOnInit(): void {
  }

}
