import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { NavController, ToastController } from '@ionic/angular';
import { RecipeListPage } from '../recipelist/recipelist.page';
import { RecipeService } from '../recipeServices/recipe.service';
import { RecipeDetailsPage } from '../recipedetails/recipedetails.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'bookmarkedlist.page.html',
  styleUrls: ['bookmarkedlist.page.scss']
})
export class BookmarkedListPage implements OnInit {
  public static selectedRecipe: Recipe;
  private loadedList: Array<Recipe>;
  private recipes: Array<Recipe> = [];
  public items: Array<Recipe> = [];
  private recipeList: RecipeListPage;
  private recipedetail: RecipeDetailsPage;

  constructor(
    private firebaseAuth: AuthService,
    private navCtrl: NavController,
    private toast: ToastController,
    private recipeService: RecipeService,
    private alertController: AlertController
  ) {
    this.recipeList = new RecipeListPage(recipeService, navCtrl, firebaseAuth);
    const recipe = JSON.parse(localStorage.getItem(firebaseAuth.user.email));
    if (recipe != null) {
      this.recipes = recipe;
    }
    // localStorage.removeItem(this.firebaseAuth.user.email);
  }

  removeBookmarkClick(list:Recipe){
    this.displayBookmarkAlert(list);
  }
  removeBookMark(list:Recipe){
    this.recipes=JSON.parse(localStorage.getItem(this.firebaseAuth.user.email));  
    if(this.recipes.indexOf(list)!== null){
        this.recipes.splice(this.recipes.indexOf(list));
      localStorage.setItem(
        this.firebaseAuth.user.email,
        JSON.stringify(this.recipes)
      );
    }
  }
  ngOnInit() {}
  gotoDetail(index: number) {
    this.recipeList.listItemClick(index);
  }

  async displayBookmarkAlert(list) {
    const newAlert = await this.alertController.create({
      header: 'Remove Bookmark',
      subHeader: '',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Yes', 
          handler: () => {
            this.removeBookMark(list);
          }
        },
        {
          text: 'Cancel'
        }
      ]
    });
    await newAlert.present();
  }
}
