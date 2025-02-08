import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { AffichageComponent } from './affichage/affichage.component';

const routes: Routes = [
  {path: 'ajout' , component:AjoutComponent},
  {path:'affichage' , component:AffichageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
