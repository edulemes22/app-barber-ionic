import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private menuCtrl: MenuController) {}

  openEndMenu() {
    // Open the menu by side
    this.menuCtrl.open('end');
  }

}
