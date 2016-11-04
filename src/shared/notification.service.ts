import { Injectable } from '@angular/core';
import { LocalNotifications } from 'ionic-native';

@Injectable()
export class NotificationService {
  send() {
    LocalNotifications.schedule({
      title: 'VTS Notification',
      text: 'Bus will arrive in 5 mins',
      sound: 'file://sound.mp3',
      every: 'minute',
      icon: 'https://github.com/shamsher31/vts-driver/src/assets/icon/schoo-bus.png'
    });   
  }
  
  cancel() {
    LocalNotifications.cancelAll();
    LocalNotifications.clearAll();
  }
}