import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'browse.page.html',
  styleUrls: ['browse.page.scss'],
})
export class BrowsePage{
  constructor( 
    private navCtrl: NavController) { }

    recipeButtonClick() {
      this.navCtrl.navigateForward('recipelist');
    }

}
