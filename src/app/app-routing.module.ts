import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecetteComponent } from './component/list-recette/list-recette.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'ListRecette',component:ListRecetteComponent },
  {path:'Login',component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
