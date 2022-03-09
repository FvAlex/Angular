import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../catalogue/model/produit-catalogue.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  @Input() product !:Product; 

  @Output() remove: EventEmitter<Product>  = new EventEmitter<Product>();

  RecupEvent() : void {
    this.remove.emit(this.product);
  }
  
  ngOnInit(): void {
  }

}
