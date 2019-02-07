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
        return await firebase.auth().signInWithEmailAndPassword(email,password);
      })
      .catch(function(error) {
        var errorMsg = error.message;
        alert("Error signing in: " + errorMsg);
      });
			this.navCtrl.navigateRoot(['/home']);
		} catch(e){
      alert("Error! "+e.message);
		}
	}
	
	async logout(){
		await this.afAuth.auth.signOut();
		localStorage.removeItem('user');
		this.router.navigate(['./login']);
	}
	
	get isLoggedIn(): boolean {
		let user = JSON.parse(localStorage.getItem('user'));
		return  (user !==  null);
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
