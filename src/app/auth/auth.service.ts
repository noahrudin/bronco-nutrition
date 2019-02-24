import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import * as firebase from 'firebase';
import { Recipe } from '../Recipe';
import { CastExpr } from '@angular/compiler';


const RECIPE_NAME_INDEX = 0;
const NUM_SERVINGS_INDEX = 1;
const MACROS_INDEX = 2;
const PREP_TIME_INDEX = 3;
const INGREDIENTS_INDEX = 4;
const STEPS_INDEX = 5;

export const snapshotToRecipeArray = snapshot => {
  const returnArr = [];
  snapshot.forEach(childSnapshot => {
      const item = childSnapshot.val();
      // package everything up into an easily usable Recipe object.
      const title = item[RECIPE_NAME_INDEX];
      const numServings = Recipe.parseNumServings(item[NUM_SERVINGS_INDEX]);
      const macros = Recipe.parseMacros(item[MACROS_INDEX]);
      const prepTime = Recipe.parsePrepTime(item[PREP_TIME_INDEX]);

      const newRecipe = new Recipe(title, numServings, macros,
                                  prepTime, item[INGREDIENTS_INDEX], 
                                  item[STEPS_INDEX]);
      returnArr.push(newRecipe);
  });

  return returnArr;
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user: User;
  private recipes = [];
  private ref = firebase.database().ref('recipeSheet/');

  constructor(public afAuth: AngularFireAuth, public router: Router, public navCtrl: NavController) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.navCtrl.navigateRoot(['./home']);
      } else {
        localStorage.setItem('user', null);
      }
    });

    // grab recipe data from Firebase, and pack it into an array.
    this.ref.on('value', resp => {
      this.recipes = [];
      this.recipes = snapshotToRecipeArray(resp);
    });
  }

  async login(email: string, password: string) {
    try {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.navCtrl.navigateRoot(['./home']);
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

  async signup(email: string, password: string) {
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.confirm_Signup(email);
      this.router.navigate(['./login']);
    } catch (e) {
      alert('Error!' + e.message);
    }
  }

  accountUserName(): String {
    return this.user.displayName;
  }

  accountFirstLastName(firstname: string, lastname: string): void {
    this.user.displayName = firstname + lastname;
  }

  resetPassword(new_password: string, conf_password: string) {
    if (this.afAuth.auth.confirmPasswordReset(new_password, conf_password)) {
      this.user.updatePassword(new_password);
    } else {
      alert('Error!: Passwords must match!');
    }
  }

  confirm_Signup(email: string) {
    this.user.sendEmailVerification();
  }

  get getRecipes(): Array<Recipe> {
    return this.recipes;
  }
}
