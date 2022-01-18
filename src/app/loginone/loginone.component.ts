import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginone',
  templateUrl: './loginone.component.html',
  styleUrls: ['./loginone.component.scss']
})
export class LoginoneComponent implements OnInit {
  usuario={
    jugador:'',
    password:'logeado'
  }
  constructor(private authService: AuthService) { }
  ingresar(){
    console.log(this.usuario);
    const { jugador, password} = this.usuario;
    this.authService.login(jugador,password).then(res=>{
      console.log("se registro: ",res)
    })
  }

  ngOnInit(): void {
  }

}
