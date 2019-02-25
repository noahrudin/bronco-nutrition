import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public menuCtrl: MenuController, private navCtrl: NavController) { }

  SearchButtonClick() {
    this.navCtrl.navigateForward('browse');
  }

  ListButtonClick() {
    this.navCtrl.navigateForward('recipelist');
  }

  ResourcesButtonClick() {
    this.navCtrl.navigateForward('resources');
  }

  SettingsButtonClick() {
    this.navCtrl.navigateForward('settings');
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}
