import { Component, Input,OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Recipe } from '../Recipe';
import { AuthService } from '../auth/auth.service';





@Component({
    selector: 'slide-recipes',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit { 

    private recipedb: firebase.database.Reference = firebase.database().ref('recipeSheet/');
    public loadedRecipeList: Array<any>
    public componentRecipe: any;
    public recipeList: Array<any>;
    
   
    slideOpts = {
        effect: 'flip'
    }

    constructor(private afAuth: AuthService,private nav: NavController) {
       
    }
    
       

    


    drawRecipes(search) {
        let recipes:Array<Recipe> = [];
        this.recipedb.on('value', recipeList => {
            if (search != "empty") {
                recipeList.forEach(recipe =>{ 
                recipes.push(recipe.val());
                return false;
            });
            }
});
                 console.log(recipes)
           
            this.recipeList = recipes;

            this.loadedRecipeList = recipes;
       

    }
    initializeRecipes() {
        this.recipeList = this.loadedRecipeList;
        
    }

    getRecipes(searchbar: any) {

        var search:Recipe = searchbar.srcElement.value;

        this.initializeRecipes();
        if (!search) {
            this.drawRecipes("empty");
            return;
        }
        this.drawRecipes(search);
        this.recipeList = this.recipeList.filter((val) => {
            console.log(val[0]);
            if (val && search) {
                if ((val[0].indexOf(search) > -1) || (val[0].toLowerCase().indexOf(search) > -1)) {

           
                    return true;
                }
                return false;
            }

        })
       
    }
//Austin, can you have this act like the selecting 
  //list component in recipelist.page.ts?
  listItemClick(index: number) {
    //RecipeListPage.selectedRecipe = this.recipes[index + 1];
    this.nav.navigateForward('recipedetails');
  }


  ngOnInit() {
  }

}
