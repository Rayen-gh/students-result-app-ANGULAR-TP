import { Component } from '@angular/core';
import { SharingTableService } from '../sharing-table.service';

@Component({
  selector: 'app-ajout',
  standalone: false,
  
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {
  constructor(public SharingTable:SharingTableService){}
  

  student={
    name :"",
    age: 0 ,
    class :"",
    result :""
  }

  ajout(){
    this.SharingTable.students.push(this.student)
    this.student={
      name :"",
      age: 0 ,
      class :"",
      result :""
    }
    
  }
}
