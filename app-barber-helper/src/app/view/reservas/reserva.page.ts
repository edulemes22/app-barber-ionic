import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { ReservaTeste } from 'src/app/model/reserva-teste.model';

@Component({
  selector: 'app-reserva',
  templateUrl: 'reserva.page.html',
  styleUrls: ['reserva.page.scss']
})
export class ReservaPage {

  constructor() {}

  items:ReservaTeste[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 5; i++) {

      let item = new ReservaTeste;
      item.funcionario = "Cleiton Faria";
      item.horario = "13/09/23 - 15:30"
      item.status = "Finalizado"
      this.items.push(item);

    }
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
