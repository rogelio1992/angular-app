import { CharacterComponent } from './character/character.component';

import { MaterialDemoComponent } from './material/material-demo/material-demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'material-demo', component: MaterialDemoComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
path: 'character', component: CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
