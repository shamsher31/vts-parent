import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import { TrackerPage } from '../tracker/tracker';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public notification: NotificationService) {
    this.menu.enable(true);
    this.notification.send();
  }
  
  startTracker() {
    this.navCtrl.setRoot(TrackerPage);
  }
}
