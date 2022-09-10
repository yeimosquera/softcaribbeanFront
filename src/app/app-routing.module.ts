import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrarPersonaComponent } from './components/registrar-persona/registrar-persona.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
  {
    path:'pacites',
    component:HomeComponent

  },
  {
    path:'registro',
    component:RegistrarPersonaComponent

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
