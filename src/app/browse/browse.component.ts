import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Recipe } from '../Recipe';
import { AuthService } from '../auth/auth.service';
import { RecipeDetailsPage } from '../recipedetails/recipedetails.page';
import { ToastController, Platform } from '@ionic/angular';
import { RecipeListPage } from '../recipelist/recipelist.page';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'slide-recipes',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  private recipedb: firebase.database.Reference = firebase
    .database()
    .ref('recipeSheet/');
  public loadedRecipeList: Array<any>;
  public componentRecipe: any;
  public recipeList: Array<any>;
  private recipes: Array<Recipe>;
  public items: Array<{ title: string }> = [];
  private selectedRecipe: Recipe;
  private native: NativeStorage = new NativeStorage();
  private fav_Recipes: Array<Recipe> = [];
  private recipesList: RecipeListPage;
  private recipeDetails: RecipeDetailsPage;
  private inc: any = 0;
  slideOpts = {
    effect: 'flip'
  };

  constructor(
    private afAuth: AuthService,
    private nav: NavController,
    private toast: ToastController
  ) {
    this.recipes = this.afAuth.getRecipes;
    for (let i = 1; i < this.recipes.length; i++) {
      this.items.push({
        title: this.recipes[i].getRecipeTitle
      });
    }
  }

  drawRecipes(search) {
    const recipes: Array<Recipe> = [];
    this.recipedb.on('value', recipeList => {
      if (search !== 'empty') {
        recipeList.forEach(recipe => {
          recipes.push(recipe.val());
          return false;
        });
      }
    });

    console.log(recipes);

    this.recipeList = recipes;

    this.loadedRecipeList = recipes;
  }
  initializeRecipes() {
    this.recipeList = this.loadedRecipeList;
  }

  getRecipes(searchbar: any) {
    const search: Recipe = searchbar.srcElement.value;

    this.initializeRecipes();
    if (!search) {
      this.drawRecipes('empty');
      return;
    }
    this.drawRecipes(search);
    this.recipeList = this.recipeList.filter(val => {
      if (val && search) {
        if (
          val[0].indexOf(search) > -1 ||
          val[0].toLowerCase().indexOf(search) > -1
        ) {
          return true;
        }
        return false;
      }
    });
  }

  get getSelectedRecipe() {
    return RecipeListPage.selectedRecipe;
  }
  // Austin, can you have this act like the selecting
  // list component in recipelist.page.ts?
  public listItemClick(index: number) {
    RecipeListPage.selectedRecipe = this.recipes[index + 1];
  }

  ngOnInit() {}
  bookMark_Recipe(recipe: Recipe) {
    this.fav_Recipes[this.inc] = recipe;
    this.inc++;
  }

  checkMark_Set(recipe: any, bool: Boolean) {}

  save_BookedMarkedRecipes() {
    localStorage.setItem('favorites', JSON.stringify(this.fav_Recipes));
    console.log(localStorage.getItem(this.afAuth.user.email));
  }
}
