import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { NavController } from '@ionic/angular';
import { RecipeDetailsPage } from '../recipedetails/recipedetails.page';
import { RecipeService } from '../recipeServices/recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: 'recipelist.page.html',
  styleUrls: ['recipelist.page.scss']
})
export class RecipeListPage implements OnInit {
  public static selectedRecipe: Recipe;
  private loadedList: Array<any>;
  private recipes: Array<Recipe>;
  public items: Array<{ title: string; idx: number; selected: boolean }> = [];
  private favList: Array<any> = [];
  private inc: any = 0;
  constructor(
    private recipeService: RecipeService,
    private navCtrl: NavController,
    private firebaseAuth: AuthService
  ) {
    // grab the recipes we got from firebase, and
    // put use their titles for the UI list.
    this.recipes = this.recipeService.getRecipes;
    for (let i = 1; i < this.recipes.length; i++) {
      this.items.push({
        title: this.recipes[i].getRecipeTitle,
        idx: this.recipes[i].dbIndex,
        selected: false
      });
    }
    this.loadedList = this.items;
  }

  ngOnInit() {}

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  listItemClick(index: number) {
    Recipe.recipeToDisplay = this.recipes[index];
    this.navCtrl.navigateForward('recipedetails');
  }

  initializeRecipeList() {
    this.items = this.loadedList;
  }

  getRecipes(searchbar: any) {
    const search = searchbar.srcElement.value;
    this.initializeRecipeList();

    if (!search) {
      return;
    }

    this.items = this.items.filter(val => {
      if (val && search) {
        if (
          val.title.indexOf(search) > -1 ||
          val.title.toLowerCase().indexOf(search) > -1
        ) {
          return true;
        }
        return false;
      }
    });
  }

  addtoFavorites(list: any) {
    this.favList[this.inc] = list;
    this.inc++;
    localStorage.setItem(
      this.firebaseAuth.user.email,
      JSON.stringify(this.favList)
    );
  }
  public static set getRecipe(recipe: {
    title: string;
    idx: number;
    selected: boolean;
  }) {
    this.prototype.listItemClick(recipe.idx);
  }
}
