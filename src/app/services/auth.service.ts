import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private afauth: AngularFireAuth) { }
    async login(jugador:string, password: string){
      try{
        return await this.afauth.signInAnonymously();
      }catch(err){
        console.log("error en login: ",err)
        return null;
      }
    
  }

}
