import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { NavController, ToastController } from '@ionic/angular';
import { RecipeListPage } from '../recipelist/recipelist.page';
import { RecipeService } from '../recipeServices/recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: 'bookmarkedlist.page.html',
  styleUrls: ['bookmarkedlist.page.scss']
})
export class BookmarkedListPage implements OnInit {
  public static selectedRecipe: Recipe;
  private loadedList: Array<Recipe>;
  private recipes: Array<{
    title: string;
    idx: number;
    selected: boolean;
  }> = [];
  public items: Array<{ title: string; idx: number; selected: boolean }> = [];
  private recipeList: RecipeListPage;

  constructor(
    private firebaseAuth: AuthService,
    private navCtrl: NavController,
    private toast: ToastController,
    private recipeService: RecipeService
  ) {
    this.recipeList = new RecipeListPage(recipeService, navCtrl, firebaseAuth);
    const recipe = JSON.parse(localStorage.getItem(firebaseAuth.user.email));
    if (recipe) {
      this.recipes = recipe;
      console.log(this.recipes[1].title);
    }
    // localStorage.removeItem(this.firebaseAuth.user.email);
  }

  ngOnInit() {}
  gotoDetail(recipe: { title: string; idx: number; selected: boolean }) {
    this.recipeList.listItemClick(recipe.idx);
  }
}
