import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


var config{
	apiKey: "AIzaSyDWUlN2Hsj78UGO4BxZD1AEKYTud_RFWsM",
	authDomain: "bronco-nutrition-firebase.firebaseapp.com", 
	databaseURL: "https://bronco-nutrition-firebase.firebaseio.com",
    projectId: "bronco-nutrition-firebase",
    storageBucket: "bronco-nutrition-firebase.appspot.com",
    messagingSenderId: "822387183488"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
	AngularFireModule.initializeApp(config),
	AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
