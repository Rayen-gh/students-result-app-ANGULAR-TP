import { Component } from '@angular/core';
import { SharingTableService } from '../sharing-table.service';

@Component({
  selector: 'app-affichage',
  standalone: false,
  
  templateUrl: './affichage.component.html',
  styleUrl: './affichage.component.css'
})
export class AffichageComponent {
  

 constructor( public sharingTable :SharingTableService){}
}
