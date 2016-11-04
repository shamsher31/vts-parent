import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public menu: MenuController) {
      this.menu.enable(false);
    }
  
  login() {
    this.navCtrl.setRoot(HomePage);
  }

}
