import { Component, OnInit } from '@angular/core';
import { Student } from './model/students.model';

@Component({
  selector: 'app-list-student',
  template: '<ul><li *ngFor="let student of students"> {{ student.id  }} - {{ student.prenom  }} - {{ student.age  }} ans </li></ul>',
  styleUrls: ['./list-student.component.css']
})

export class ListStudentComponent implements OnInit {

  constructor() { }

  students : Student[] = [
    {id: 1, prenom: "Alex", age: 23},
    {id: 2, prenom: "Guillaume", age: 47},
    {id: 3, prenom: "Hubert", age: 27}
  ];

  ngOnInit(): void {
  }

}
