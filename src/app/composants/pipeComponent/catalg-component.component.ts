import { Component, OnInit } from '@angular/core';
import { Product } from './model/product.model';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './catalg-component.component.html',
  styleUrls: ['./catalg-component.component.css']
})

export class PipeComponentComponent implements OnInit {

  constructor() { }

  catalogues: Product[] = [
    {id: 1, name: "Produit 1", price: 20, description:"Lorem Ipsum is simply dummy text of me."},
    {id: 2, name: "Produit 2", price: 30, description:" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id: 3, name: "Produit 3", price: 40, description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure "},
    {id: 4, name: "Produit 4", price: 50, description:"Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero"},
    {id: 5, name: "Produit 5", price: 60, description:"Lorem Ipsum is simply dummy text of me."},
    {id: 6, name: "Produit 6", price: 70, description:" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id: 7, name: "Produit 7", price: 80, description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure "},
    {id: 8, name: "Produit 8", price: 90, description:"Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero"},
    {id: 9, name: "Produit 9", price: 100, description:"Lorem Ipsum is simply dummy text of me."},
    {id: 10, name: "Produit 10", price: 110, description:" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
  ]

  ngOnInit(): void {
  }

}
