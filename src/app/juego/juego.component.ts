import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})

export class JuegoComponent implements OnInit {
  constructor() { }
  tabla !:Array<string>
  turno ="X";
  tabla_ganadora=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [1,4,7],
    [2,4,6]
  ]
  tabla_perdedora=[
    [1,4,6,8],
    [0,4,5,6],
    [0,2,4,7],
    [1,3,5,7],
    [2,3,4,8],
    [1,5,6,8],
    [0,2,5,7],
    [1,3,6,8],
    [0,2,3,7]
  ]
  ngOnInit(): void {
    this.tabla=new Array(9).fill('')
  }

  control(index:number){
    if(!this.tabla[index]){
      this.tabla[index]=this.turno;
      this.turno = (this.turno=='X') ? 'O' :'X';
    }

    
    for(let i =0;i<this.tabla_ganadora.length;i++){
      let chequeo_ganador = this.tabla_ganadora[i]
      let p1 = chequeo_ganador[0];
      let p2 = chequeo_ganador[1];
      let p3 = chequeo_ganador[2];
      if(this.tabla[p1]!='' && this.tabla[p1]==this.tabla[p2] && this.tabla[p2] == this.tabla[p3] &&
      this.tabla[p1]==this.tabla[p3]){
        alert('Juagador ' + this.tabla[p1] + " ha ganado el juego, desea reinciar?"),
        this.tabla=Array(9).fill('')
      }
    for(let i =0;i<this.tabla_perdedora.length;i++){
        let chequeo_perdedor = this.tabla_perdedora[i]
        let p1 = chequeo_perdedor[0];
        let p2 = chequeo_perdedor[1];
        let p3 = chequeo_perdedor[2];
        let p4 = chequeo_perdedor[3];
        if(this.tabla[p1]!='' && this.tabla[p1]==this.tabla[p2] && this.tabla[p2] == this.tabla[p3] &&
        this.tabla[p1]==this.tabla[p3] && this.tabla[p1]==this.tabla[p4] && this.tabla[p2]==this.tabla[p3]
        && this.tabla[p3]==this.tabla[p4]){
          alert("Empate!!, desea reiniciar el Juego?"),
          this.tabla=Array(9).fill('')
        }
    }
    }

  }
}
