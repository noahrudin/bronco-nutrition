import { Injectable } from '@angular/core'
import {
    AngularFireDatabase,
    AngularFireList,
    snapshotChanges,
} from '@angular/fire/database'

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {
    users: AngularFireList<any>
    private email
    private firstname
    private lastname
    constructor(private afData: AngularFireDatabase) {
        afData.database.ref('/Users')
        this.users = afData.list('Users/')
    }

    createUser(email: string, firstname: string, lastname: string) {
        this.afData.database.ref('Users/').set({
            email: email,
            firstname: firstname,
            lastname: lastname,
        })
    }

    getUser(email, firstname, lastname) {
        email = this.afData.object('Users/email')
        firstname = this.afData.object('Users/firstname')
        lastname = this.afData.object('Users/lastname')
        return {
            email: email,
            firstname: firstname,
            lastname: lastname,
        }
    }
    delete() {}
}
