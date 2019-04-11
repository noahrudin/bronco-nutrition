import { NavController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit {
  constructor(
    private alertController: AlertController,
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  accountButtonClick() {
    this.navCtrl.navigateForward('account');
  }

  signoutButtonClick() {
    this.displaySignoutAlert();
  }

  aboutButtonClick() {
    this.navCtrl.navigateForward('about');
  }

  ngOnInit() {}

  async displaySignoutAlert() {
    const newAlert = await this.alertController.create({
      header: 'Sign Out',
      subHeader: '',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.authService.logout();
            this.navCtrl.navigateRoot(['/login']);
          }
        },
        {
          text: 'Cancel'
        }
      ]
    });
    await newAlert.present();
  }
}
