import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { TrackerPage } from '../pages/tracker/tracker';

import { NotificationService } from '../shared/notification.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    LoginPage,
    TrackerPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    LoginPage,
    TrackerPage
  ],
  providers: [
    NotificationService
  ]
})
export class AppModule {}
