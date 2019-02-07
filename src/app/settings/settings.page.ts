import { NavController } from '@ionic/angular';
import { AboutPage } from "../about/about.page";
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})


export class SettingsPage implements OnInit {

  buttonClick = () =>{
    //this.NavController.push(AboutPage);
    console.log("hello")
  }
   constructor(private authService: AuthService){
   
   }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
