import { Component } from '@angular/core';
import { FirebaseService } from '../database/firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage {

    constructor(private fireService: FirebaseService) {

    }
}
