import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { NavController } from '@ionic/angular';
import { RecipeService } from '../recipeServices/recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: 'foodlist.page.html',
  styleUrls: ['foodlist.page.scss']
})
export class FoodListPage implements OnInit {
  private selectedItem: any;
  private recipes: Array<Recipe>;
  public items: Array<{ title: string }> = [];

  constructor(
    private recipeService: RecipeService,
    private navCtrl: NavController
  ) {
    // grab the recipes we got from firebase, and
    // put use their titles for the UI list.
    this.recipes = this.recipeService.getRecipes;
    let i = 1;
    while (this.recipes[i]) {
      // check for valid element, live
      this.items.push({
        title: this.recipes[i].getRecipeTitle
      });
      i++;
    }
  }

  ngOnInit() {}

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
