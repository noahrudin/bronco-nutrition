import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { NavController } from '@ionic/angular';
import { RecipeDetailsPage } from '../recipedetails/recipedetails.page';


@Component({
  selector: 'app-list',
  templateUrl: 'recipelist.page.html',
  styleUrls: ['recipelist.page.scss']
})
export class RecipeListPage implements OnInit {
  public static selectedRecipe: Recipe;
  private loadedList: Array<any>;
  private recipes: Array<Recipe>;
  public items: Array<{ title: string, idx: number, selected: boolean }> = [];

  constructor(private firebaseAuth: AuthService,
              private navCtrl: NavController) {
    // grab the recipes we got from firebase, and
    // put use their titles for the UI list.
    this.recipes = this.firebaseAuth.getRecipes;
    for(let i = 1; i < this.recipes.length; i++){
      this.items.push({
        title: this.recipes[i].getRecipeTitle,
        idx: this.recipes[i].dbIndex,
        selected: false
      });
    }
    this.loadedList = this.items;
  }
    
  ngOnInit() {

  }

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
      
      var search = searchbar.srcElement.value;
      this.initializeRecipeList();

      if(!search) {
        return;
      }
      
      this.items = this.items.filter((val) => {
          if (val && search) {
              if ((val.title.indexOf(search) > -1) || (val.title.toLowerCase().indexOf(search) > -1)) {
                  return true;
              }
              return false;
          }
      });

  }

}
