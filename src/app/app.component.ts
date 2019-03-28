import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { NetworkService, ConnectionStatus } from './services/network.service';
import { OfflineManagerService } from './services/offline-manager.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public net_color_status: string = 'yellow';
  public net_title: string = 'Idle';
  public platform_title: string = 'logo-rss';
  public platform_color:string = '#ff471a';
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Snacks and Food Items',
      url: '/browse',
      icon: 'pizza'
    },
    {
      title: 'Recipes',
      url: '/recipelist',
      icon: 'search'
    },
    {
      title: 'Bookmarks',
      url: '/bookmarkedlist',
      icon: 'bookmark'
    },
    {
      title: 'Resources',
      url: '/resources',
      icon: 'link'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private networkService: NetworkService,
    private offlineManager: OfflineManagerService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.show();
      if (this.platform.is('mobile') && this.platform.is('ios')) {
          this.platform_title = 'logo-apple';
      } else if ( this.platform.is('mobile') && this.platform.is('android')) {
          this.platform_title = 'logo-android';
      }
      this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
          if (status === ConnectionStatus.Online) {
            this.net_title ='checkmark-circle';
            this.net_color_status='success';
            this.offlineManager.checkForEvents().subscribe();
          }
          else if (status === ConnectionStatus.Offline) {
            this.net_title ='alert';
            this.net_color_status='danger';
            this.offlineManager.checkForEvents().subscribe();
          }else{
              this.net_title = 'warning';
              this.net_color_status = 'warning';
          }
      });
      // check if the user is logged in and show login if needed.
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          // user is logged in. skip to home page.
          this.navCtrl.navigateRoot(['/home']);
        }
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
