import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: 'recipelist.page.html',
  styleUrls: ['recipelist.page.scss']
})
export class RecipeListPage implements OnInit {
  public static selectedRecipe: Recipe;
  private recipes: Array<Recipe>;
  public items: Array<{ title: string }> = [];

  constructor(private firebaseAuth: AuthService,
              private navCtrl: NavController) {
    // grab the recipes we got from firebase, and
    // put use their titles for the UI list.
    this.recipes = this.firebaseAuth.getRecipes;
    for(let i = 1; i < this.recipes.length; i++){
      this.items.push({
        title: this.recipes[i].getRecipeTitle
      });
    }
    }
    
  ngOnInit() {

  }

 public static get getSelectedRecipe() {
    return RecipeListPage.selectedRecipe;
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  listItemClick(index: number) {
    RecipeListPage.selectedRecipe = this.recipes[index + 1];
    this.navCtrl.navigateForward('recipedetails');
  }
}
