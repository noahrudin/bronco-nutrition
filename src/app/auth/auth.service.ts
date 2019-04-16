import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  private recipes = [];
  private foodItems = [];
  private recipeDB = firebase.database().ref('recipeSheet/');
  private foodDB = firebase.database().ref('foodSheet/');
  private username: string;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public navCtrl: NavController
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.username = localStorage.getItem(this.user.email);
        this.navCtrl.navigateRoot(['./home']);
      } else {
        localStorage.setItem('user', null);
      }
    });

    // grab recipe data from Firebase, and pack it into an array.
  }

  async login(email: string, password: string) {
    try {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      if (this.user.emailVerified) {
        this.navCtrl.navigateRoot(['./home']);
      } else {
        alert('Please verify your email');
      }
    } catch (error) {
      const errorMsg = error.message;
      alert('Error signing in: ' + errorMsg);
    }
  }

  async logout() {
    await firebase.auth().signOut();
    localStorage.removeItem('user');
    this.navCtrl.navigateRoot(['./login']);
  }

  // ask firebase if we have a user logged in currently.
  get isLoggedIn(): boolean {
    if (firebase.auth().currentUser) {
      return true;
    } else {
      return false;
    }
  }

  async signup(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    try {
      if (
        email.includes('u.boisestate.edu') ||
        email.includes('boisestate.edu')
      ) {
        await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        this.confirm_Signup(email);
        this.accountFirstLastName(firstname + lastname);
        this.router.navigate(['./login']);
      } else {
        alert('invalid email format: must be school email');
        this.router.navigate(['./register']);
      }
    } catch (e) {
      alert('Error!' + e.message);
    }
  }

  accountEmail(): string {
    return this.user.email;
  }

  accountUserName(): string {
    return this.user.displayName;
  }

  resetPassword(new_password: string, conf_password: string) {
    if (this.afAuth.auth.confirmPasswordReset(new_password, conf_password)) {
      this.user.updatePassword(new_password);
    } else {
      alert('Error!: Passwords must match!');
    }
  }

  async confirm_Signup(email: string) {
    this.user.sendEmailVerification();
  }

  accountFirstLastName(userName: string) {
    this.user.updateProfile({
      displayName: userName,
      photoURL: null
    });
  }
}
