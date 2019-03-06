import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { InputChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'browse.page.html',
  styleUrls: ['browse.page.scss'],
})
export class BrowsePage{
    private recipedb: firebase.database.Reference = firebase.database().ref('masterSheet/');
    private fooddb: firebase.database.Reference = firebase.database().ref('foodSheet/');
    public loadedRecipeList: Array<any>;
    public componentRecipe: any;
    public recipeList: Array<any>;
  constructor( 
      private navCtrl: NavController) {

      this.recipedb.on('value', recipeList => {
          let recipes = [];
              recipeList.forEach(recipe => {
                  recipes.push(recipe.val());
                  return false;
              });
          this.recipeList = recipes;
          this.loadedRecipeList = recipes;
      });

  }

  //Austin, can you have this act like the selecting 
  //list component in recipelist.page.ts?
  listItemClick(index: number) {
    //RecipeListPage.selectedRecipe = this.recipes[index + 1];
    this.navCtrl.navigateForward('recipedetails');
  }

    foodListClick() {
      this.navCtrl.navigateForward('foodlist');
    }
   
    initializeRecipes() {
            this.recipeList = this.loadedRecipeList;
    }

    getRecipes(searchbar: any) {
        
        var search = searchbar.srcElement.value;
        this.initializeRecipes();
        
        this.recipeList = this.recipeList.filter((val) => {
            if (val && search) {
                if ((val[0].indexOf(search) > -1) || (val[0].toLowerCase().indexOf(search) > -1)) {
                    this.componentRecipe = search;
                    return true;
                }
                return false;
            }

        })
        
       // console.log(search, this.recipeList.length);
    }

    
        
    
}
