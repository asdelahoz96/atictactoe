import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { LoginComponent } from './login/login/login.component';
import { LoginoneComponent } from './loginone/loginone.component';
import { PagenfComponent } from './pagenf/pagenf.component';
import { UnirseComponent } from './unirse/unirse.component';


const routes: Routes = [
{
  pathMatch:'full',
  path:"",
  redirectTo:'Login'
},
{
  path:"Login",
  component:LoginComponent
},  
{
  path:"game",
  component:GameComponent
},
{
  path:"one",
  component:LoginoneComponent
},
{
  path:"unirse",
  component:UnirseComponent
},
{
  path:"**",
  component:PagenfComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
