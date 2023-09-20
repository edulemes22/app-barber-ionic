import { Component } from '@angular/core';
import { ReservaTeste } from 'src/app/model/reserva-teste.model';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss']
})
export class PerfilPage {

  constructor() {}

  visualizar:boolean = true;

  item:ReservaTeste = new ReservaTeste;

  ngOnInit() {

    this.item.funcionario = "Cleiton Faria";
    this.item.horario = "13/09/23 - 15:30";
    this.item.status = "Finalizado";
    
  }

  editar() {

    this.visualizar = false;

  }

  salvar() {

    this.visualizar = true;

  }

}
