import { Component } from '@angular/core'
import { AuthService } from '../auth/auth.service'
@Component({
    selector: 'app-home',
    templateUrl: 'account.page.html',
    styleUrls: ['account.page.scss'],
})
export class AccountPage {
    public username: string
    public email: string
    constructor(private afAuth: AuthService) {
        this.username = afAuth.user.displayName
        this.email = afAuth.user.email
    }
}
