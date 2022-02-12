import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './juego/juego.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { PnfComponent } from './pagenotfound/pnf.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginunirseComponent } from './loginunirse/loginunirse.component';


@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    LoginComponent,
    PnfComponent,
    LoginuserComponent,
    LoginunirseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
