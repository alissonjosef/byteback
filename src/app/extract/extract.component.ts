import { TransferenciaService } from 'src/service/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  transferencias: any[]

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.transferencias = this.service.transferencias
  }

}
