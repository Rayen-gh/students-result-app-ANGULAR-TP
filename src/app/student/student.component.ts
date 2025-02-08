import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: false,
  
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
student={
  name :"",
  age: 0 ,
  class :"",
  result :""
}
students:any[]=[];
ajout(){
  this.students.push(this.student);
  this.student={
    name :"",
    age: 0 ,
    class :"",
    result :""
  }
  console.log(this.students);
  
}
}
