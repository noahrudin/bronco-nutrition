import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private user: User;
  constructor(public afAuth: AngularFireAuth, public router: Router, public navCtrl: NavController) { 
		this.afAuth.authState.subscribe(user => {
			if(user) {
				this.user=user;
				localStorage.setItem('user',JSON.stringify(this.user));
			}else{
				localStorage.setItem('user',null);
			}
		})
  
	}
	
	async login(email: string, password: string){
		try{
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(async function() {
        await firebase.auth().signInWithEmailAndPassword(email,password);
        this.navCtrl.navigateRoot(['./home']);
      })
      .catch(function(error) {
        var errorMsg = error.message;
        alert("Error signing in: " + errorMsg);
      });
		} catch(e){
			alert("Error! "+e.message);
		}
		
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
	
	async signup(email: string, password: string){
		try{
			await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
			this.router.navigate(['./login']);
		}catch(e){
				alert("Error!"+e.message);
		}
	} 
}
