import { Component } from '@angular/core';
import { FirebaseService } from '../database/firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage {
    private email: { title: string };
    private firstname: { title: string };
    private lastname: { title: string };
    private User;
    constructor(private fireService: FirebaseService) {
        this.User = fireService.getUser(this.email,this.firstname,this.lastname);
    }
}
