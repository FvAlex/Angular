import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profilForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]],
    firstname: ['', Validators.required,],
    lastname: ['', Validators.required,],
    password: ['', [Validators.required,Validators.minLength(8)]]
  });


  constructor(private fb: FormBuilder) { }

  onSubmit(){
    if(this.profilForm.valid){
      console.warn(this.profilForm.value)
    }
  }

  get myEmail(): FormControl {
    return this.profilForm.get('email') as FormControl
  }
  get myFirstname(): FormControl {
    return this.profilForm.get('firstname') as FormControl
  }
  get myLastname(): FormControl {
    return this.profilForm.get('lastname') as FormControl
  }
  get myPassword(): FormControl {
    return this.profilForm.get('password') as FormControl
  }

  ngOnInit(): void {
  }

}
