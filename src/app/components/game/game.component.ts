import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  @Input() InJugador:any;
  constructor() { }
  board !:Array<string>
  player_turn ="X";
  winning_border=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [1,4,7],
    [2,4,6]
  ]
  loser_border=[
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
    this.board=new Array(9).fill('')
  }

  handlerPlayer(index:number){
    if(!this.board[index]){
      this.board[index]=this.player_turn;
      this.player_turn = (this.player_turn=='X') ? 'O' :'X';
    }

    
    for(let i =0;i<this.winning_border.length;i++){
      let winning_check = this.winning_border[i]
      let p1 = winning_check[0];
      let p2 = winning_check[1];
      let p3 = winning_check[2];
      if(this.board[p1]!='' && this.board[p1]==this.board[p2] && this.board[p2] == this.board[p3] &&
      this.board[p1]==this.board[p3]){
        alert('Juagador ' + this.board[p1] + " ha ganado el juego, desea reinciar?"),
        this.board=Array(9).fill('')
      }
    for(let i =0;i<this.loser_border.length;i++){
        let loser_check = this.loser_border[i]
        let p1 = loser_check[0];
        let p2 = loser_check[1];
        let p3 = loser_check[2];
        let p4 = loser_check[3];
        if(this.board[p1]!='' && this.board[p1]==this.board[p2] && this.board[p2] == this.board[p3] &&
        this.board[p1]==this.board[p3] && this.board[p1]==this.board[p4] && this.board[p2]==this.board[p3]
        && this.board[p3]==this.board[p4]){
          alert("Empate!!, desea reiniciar el Juego?"),
          this.board=Array(9).fill('')
        }
    }
    }

  }
}
