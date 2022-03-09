import { Component, OnInit } from '@angular/core';
import { Login } from './model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  model = {
    email: "",
    password: "",
  };

  modelDeux: Login[] = [{name: ""},]

  onSubmit() {
    console.log(this.model);

  }

  ngOnInit(): void {
  }

}
