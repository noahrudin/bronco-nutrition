import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import * as firebase from 'firebase';
import { Recipe } from '../Recipe';
import { FoodItem } from '../FoodItem';

const FOOD_ITEM_NAME_INDEX = 0;
const FOOD_MACRO_INDEX = 1;

const RECIPE_NAME_INDEX = 0;
const NUM_SERVINGS_INDEX = 1;
const MACROS_INDEX = 2;
const PREP_TIME_INDEX = 3;
const INGREDIENTS_INDEX = 4;
const STEPS_INDEX = 5;

export const snapshotToRecipeArray = snapshot => {
  const returnArr = [];
  let idx = 0;
  snapshot.forEach(childSnapshot => {
    const item = childSnapshot.val();
    // package everything up into an easily usable Recipe object.
    const title = item[RECIPE_NAME_INDEX];
    const numServings = Recipe.parseNumServings(item[NUM_SERVINGS_INDEX]);
    const macros = Recipe.parseMacros(item[MACROS_INDEX]);
    const prepTime = item[PREP_TIME_INDEX];
    const ingredients = Recipe.parseIngredients(item[INGREDIENTS_INDEX]);
    const steps = Recipe.parseSteps(item[STEPS_INDEX]);

    const newRecipe = new Recipe(
      title,
      numServings,
      macros,
      prepTime,
      ingredients,
      steps,
      idx
    );
    returnArr.push(newRecipe);
    idx++;
  });

  return returnArr;
};

export const snapshotToFoodArray = snapshot => {
  const returnArr = [];
  snapshot.forEach(childSnapshot => {
    const item = childSnapshot.val();
    const title = item[FOOD_ITEM_NAME_INDEX];
    const macros = Recipe.parseMacros(item[FOOD_MACRO_INDEX]);

    const newFoodItem = new FoodItem(macros, title);

    returnArr.push(newFoodItem);
  });

  return returnArr;
};

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
    this.recipeDB.on('value', resp => {
      this.recipes = snapshotToRecipeArray(resp);
    });

    // do the same with food items.
    this.foodDB.on('value', resp => {
      this.foodItems = snapshotToFoodArray(resp);
    });
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

  get getRecipes(): Array<Recipe> {
    return this.recipes;
  }

  get foodList(): Array<FoodItem> {
    return this.foodItems;
  }

  confirm_signup(email: string) {
    const user = firebase.auth().currentUser;
    user
      .sendEmailVerification()
      .then(() => {
        alert('please confirm your email');
      })
      .catch(() => {
        alert('There was an error');
      });
  }
}
