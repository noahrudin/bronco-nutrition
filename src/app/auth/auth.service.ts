import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
import * as firebase from 'firebase/app';
import { Action } from 'rxjs/internal/scheduler/Action';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private user: User;
    private username: string;
    constructor(public afAuth: AngularFireAuth, public router: Router, public navCtrl: NavController) {
      this.afAuth.authState.subscribe(user => {
          if (user) {
				this.user=user;
              localStorage.setItem('user', JSON.stringify(this.user));
              this.username = localStorage.getItem(this.user.email);
                this.navCtrl.navigateRoot(['./home']);
			}else{
				localStorage.setItem('user',null);
			}
      })

     
  
	}
	
	async login(email: string, password: string){
        try {
            
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            await firebase.auth().signInWithEmailAndPassword(email, password);
     	        this.navCtrl.navigateRoot(['./home']); 
		}
		catch(error){
		var errorMsg = error.message;
		alert("Error signing in: "+errorMsg);
		};
		
	}
	
	async logout(){
        await firebase.auth().signOut();
        localStorage.removeItem('user');
        this.navCtrl.navigateRoot(['./login']);
       
	}
	
  // ask firebase if we have a user logged in currently.
	get isLoggedIn(): boolean {
    if(firebase.auth().currentUser) {
      return true;
    }
    else {
      return false;
    }
	}
	
	async signup(firstname: string,lastname:string,email: string, password: string){
		try{
            await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            this.confirm_Signup(email);
            this.accountFirstLastName(firstname, lastname);
            
            this.router.navigate(['./login']);
		}catch(e){
				alert("Error!"+e.message);
		}
    }
    accountUserName(): string {
        localStorage.setItem(this.user.email, this.username);
        return this.username;
    }

    accountEmail(): string  {
        return  this.user.email ;
    }

    accountFirstLastName(firstname: string, lastname: string): void {
        this.username = firstname + lastname;
    }

    resetPassword(new_password: string, conf_password: string) {
        if (this.afAuth.auth.confirmPasswordReset(new_password, conf_password)) {
            this.user.updatePassword(new_password);
        } else {
            alert("Error!: Passwords must match!");
        }
    }

    confirm_Signup(email: string) {
        this.user.sendEmailVerification();
    }
    FireBase_TitleSheets(): any {
        var db = firebase.database();
        db.ref('/masterSheet/').once('value').then(function (readData) {
            var data = (readData.val());
            return data;
        });
    }
}
