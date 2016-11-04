import { Component } from '@angular/core';

import { NavController, MenuController} from 'ionic-angular';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
  constructor(
    public navCtrl: NavController,
    public menu: MenuController) {
      this.menu.enable(true);
    } 
}
