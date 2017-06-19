import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InputTextModule, ButtonModule } from 'primeng/primeng';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;
  message: string;

  constructor(public navCtrl: NavController) {

  }

  onClick() {
    this.message = 'Hello ' + this.name;
  }

}
