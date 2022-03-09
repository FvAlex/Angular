import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-meteo-component',
  templateUrl: './meteo-component.component.html',
  styleUrls: ['./meteo-component.component.css']
})
export class MeteoComponentComponent implements OnInit {

  profilForm = this.fb.group({
    ville: ['']
  })

  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {}

  onSubmit(){
    if(this.profilForm.valid){
      this.apiService.getVille(this.profilForm.value)
    }
  }
  
}
