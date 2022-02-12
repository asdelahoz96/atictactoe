import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginunirse',
  templateUrl: './loginunirse.component.html',
  styleUrls: ['./loginunirse.component.scss']
})
export class LoginunirseComponent implements OnInit {
  usuario={
    jugador:'',
    password: 'Logeado'
  }
  constructor(private authService: AuthService) { }

  ingresar(){
    console.log(this.usuario);
    const { jugador, password } = this.usuario;
    this.authService.login(jugador, password).then(res=>{
      console.log("se logueo: ",res)
    })
}
ngOnInit(): void {
}
}
