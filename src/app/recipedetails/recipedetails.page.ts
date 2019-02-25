import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'recipedetails.page.html',
  styleUrls: ['recipedetails.page.scss'],
})
export class RecipeDetailsPage{
  private selectedItem: any;
  private recipes: Array<Recipe>;
  public items: Array<{ title: string }> = [];

  constructor(private firebaseAuth: AuthService,
              private navCtrl: NavController) {
    // grab the recipes we got from firebase, and
    // put use their titles for the UI list.
    this.recipes = this.firebaseAuth.getRecipes;
    var i = 1;
    while(this.recipes[i]){ //check for valid element, live
      this.items.push({
        title: this.recipes[i].getRecipeTitle
      });
      i++;
    }
  }

  ngOnInit() {

  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

}
