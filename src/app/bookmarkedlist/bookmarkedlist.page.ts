import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { NavController } from '@ionic/angular';
import {RecipeListPage} from '../recipelist/recipelist.page';
import { RecipeDetailsPage } from '../recipedetails/recipedetails.page';

@Component({
  selector: 'app-list',
  templateUrl: 'bookmarkedlist.page.html',
  styleUrls: ['bookmarkedlist.page.scss']
})
export class BookmarkedListPage implements OnInit {
  public static selectedRecipe: Recipe;
  private loadedList: Array<Recipe>;
  private recipes: Array<Recipe>=[];
  public items: Array<{ title: string, idx: number, selected: boolean }> = [];

  constructor(private firebaseAuth: AuthService,
              private navCtrl: NavController) {
                let recipe = JSON.parse(localStorage.getItem(firebaseAuth.user.email));
             if(recipe){
              this.recipes=recipe;
             } 
             //localStorage.removeItem(this.firebaseAuth.user.email);
             console.log(recipe); 
            
  }
    
  ngOnInit() {

  }
   gotoDetail(recipe: { title: string,idx:number,selected: boolean }){ 
    RecipeDetailsPage.prototype.recipeTitle=recipe.title;
    RecipeListPage.prototype.listItemClick(recipe.idx);
  }
}
