import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, snapshotChanges } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    users: AngularFireList<any>;
    private email;
    private firstname;
    private lastname;
    constructor(private afData: AngularFireDatabase) {
        afData.database.ref('/Users');
        this.users = afData.list('Users/');
    }

    createUser(email: string, firstname: string, lastname: string) {
        this.afData.database.ref('Users/').set({
            email: email,
            firstname: firstname,
            lastname: lastname
        });
    }

   get getUser() {
       return this.afData.database.ref("Users/").on('value', () => {
           this.email = this.afData.object('Users/email');
           this.firstname = this.afData.object('Users/firstname');
           this.lastname = this.afData.object('Users/lastname');
       });

    }
    delete() {

    }
}

