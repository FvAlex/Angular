import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {

  constructor() { }

  textElement !:number;
  textElementSecond !:number;
  result !:number;

  
  ngOnInit(): void {
  }

  AdditionCalcul() : void {
    this.result = Number(this.textElement) + Number(this.textElementSecond)
  }
  SoustraireCalcul() : void {
    this.result = Number(this.textElement) - Number(this.textElementSecond)
  }
  MultiplierCalcul() : void {
    this.result = Number(this.textElement) * Number(this.textElementSecond)
  }
  DiviserCalcul() : void {
    this.result = Number(this.textElement) / Number(this.textElementSecond)
  }

}
