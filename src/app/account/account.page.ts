import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage {
   
    private username: string;
    private email: string;
    constructor(private afAuth: AuthService) {
        this.username = afAuth.accountUserName();
        this.email = afAuth.accountEmail();
        
    }
}
