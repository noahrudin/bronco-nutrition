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
    public recipeList: Array<any>;
  constructor( 
      private navCtrl: NavController) {
      

  }

    recipeButtonClick() {
      this.navCtrl.navigateForward('recipelist');
    }

    foodButtonClick() {
      this.navCtrl.navigateForward('foodlist');
    }
    drawRecipes(search){
        console.log(this.recipedb.startAt(0));
        this.recipedb.on('value', recipeList => {
            let recipes = [];
            if(search != "empty"){
            recipeList.forEach(recipe => {
                recipes.push(recipe.val());
                return false;
            });
        }
            this.recipeList = recipes;
            this.loadedRecipeList = recipes;
        });
    
    }
    initializeRecipes() {
            this.recipeList = this.loadedRecipeList;
    }

    getRecipes(searchbar: any) {
        
        var search = searchbar.srcElement.value;
        this.initializeRecipes();
        if (!search) {
        this.drawRecipes("empty");
            return ;
        }
        this.drawRecipes(search);
        
        this.recipeList = this.recipeList.filter((val) => {
            if (val && search) {
                if ((val[0].indexOf(search)>-1)||(val[0].toLowerCase().indexOf(search)>-1)) {
                  
                    return true;
                }
                return false;
            }

        })
        
       // console.log(search, this.recipeList.length);
    }
}
