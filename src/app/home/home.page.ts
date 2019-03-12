import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {NetworkService,ConnectionStatus} from '../services/network.service';
import {Network} from '@ionic-native/network';
import {ToastController, Platform} from '@ionic/angular';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private recipes: any;
  private fav_recipes: Array<any>=[];
  private native:NativeStorage=new NativeStorage();
  constructor(public menuCtrl: MenuController, private navCtrl: NavController,private afAuth:AuthService) {
     
  }
  
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

  ngOnInit() {
   this.recipes=localStorage.getItem(this.afAuth.user.email);
   if(this.recipes){
     this.fav_recipes=JSON.parse(this.recipes);
   }
   
  }


  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  

  }



