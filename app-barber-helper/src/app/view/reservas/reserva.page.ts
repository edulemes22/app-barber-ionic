import { Component } from '@angular/core';
import { ReservaTeste } from 'src/app/model/reserva-teste.model';

@Component({
  selector: 'app-reserva',
  templateUrl: 'reserva.page.html',
  styleUrls: ['reserva.page.scss']
})
export class ReservaPage {

  constructor() {}

  item:ReservaTeste = new ReservaTeste;

  ngOnInit() {

    this.item.funcionario = "Cleiton Faria";
    this.item.horario = "13/09/23 - 15:30";
    this.item.status = "Finalizado";
    
  }

}
