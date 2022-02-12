import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoComponent } from './juego/juego.component';
import { LoginComponent } from './login/login.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { PnfComponent } from './pagenotfound/pnf.component';
import { LoginunirseComponent } from './loginunirse/loginunirse.component';


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
  path:"Juego",
  component:JuegoComponent
},
{
  path:"IngresodeUser",
  component:LoginuserComponent
},
{
  path:"IngresodeId",
  component:LoginunirseComponent
},
{
  path:"**",
  component:PnfComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
