import { Component, OnInit } from '@angular/core'
import { MenuController } from '@ionic/angular'
import { NavController } from '@ionic/angular'
import { NetworkService, ConnectionStatus } from '../services/network.service'
import { Network } from '@ionic-native/network'
import { ToastController, Platform } from '@ionic/angular'
import { User } from 'firebase'
import { NativeStorage } from '@ionic-native/native-storage/ngx'
import { AuthService } from '../auth/auth.service'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    private recipes: any
    private restaurants: any
    private fav_recipes: Array<any> = []
    private user: User
    private username: string
    private native: NativeStorage = new NativeStorage()
    constructor(
        public menuCtrl: MenuController,
        private navCtrl: NavController,
        private afAuth: AuthService,
        private statusBar: StatusBar
    ) {
        this.statusBar.styleDefault()
        this.user = afAuth.user
    }

    SearchButtonClick() {
        this.navCtrl.navigateForward('browse')
    }

    ListButtonClick() {
        this.navCtrl.navigateForward('recipelist')
    }

    RListButtonClick() {
        this.navCtrl.navigateForward('restaurantlist')
    }

    BookmarkButtonClick() {
        this.navCtrl.navigateForward('bookmarkedlist')
    }

    ResourcesButtonClick() {
        this.navCtrl.navigateForward('resources')
    }

    ReferencesButtonClick() {
        this.navCtrl.navigateForward('references')
    }

    SettingsButtonClick() {
        this.navCtrl.navigateForward('settings')
    }
    HelpButtonClick() {
        this.navCtrl.navigateForward('help')
    }

    TipButtonClick() {
        this.navCtrl.navigateForward('tip')
    }

    ngOnInit() {
        this.recipes = localStorage.getItem('favorites')
        if (this.recipes) {
            this.fav_recipes = JSON.parse(this.recipes)
        }
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true)
    }
}
