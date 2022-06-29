import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>()

  valor: number
  destino: number

  transferir(){
    console.log("Transferencia Realizada")
    const valorEmit = {valor:this.valor, destino:this.destino}
    this.aoTransferir.emit(valorEmit)
    this.limparCampo()
  }

  limparCampo(){
    this.valor = 0
    this.destino = 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
