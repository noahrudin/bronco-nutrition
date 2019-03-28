import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { Macro } from '../Recipe';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'recipedetails.page.html',
  styleUrls: ['recipedetails.page.scss'],
})

export class RecipeDetailsPage{
  private recipeToDisplay: Recipe;
  public isBookmarked: boolean;
  public recipeTitle: string;
  public servingSize: string;
  public prepTime: string;
  public macros: Macro[];
  public macroString: string;
  public ingredients: Array <{ name: string }> = [];
  public steps: Array<{ str: string }> = [];
  private inc: any = 0;
  private recipeToBook:Array<string>=[];

  constructor(private navCtrl: NavController,private toastController:ToastController) {
    this.recipeToDisplay = Recipe.getRecipeToDisplay;
    this.recipeTitle = this.recipeToDisplay.getRecipeTitle;
    this.servingSize = this.recipeToDisplay.getNumServings;
    this.prepTime = this.recipeToDisplay.getPrepTime;
    this.macros = this.recipeToDisplay.getMacros;
    
    // populate lists of ingredients and steps
    this.setupIngredientsList();
    this.setupStepsList();
    this.macroString = this.getMacroString();
    this.isBookmarked = false;
  }

  bookmarkClick(){
    this.presentToast();
    this.bookmarkRecipe();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Recipe Bookmarked',
      duration: 1500
    });
    toast.present();
  }

  bookmarkRecipe(){
   /*if(localStorage.getItem("increment")!= null){
    this.inc=JSON.parse(localStorage.getItem("increment"));
    this.recipeToBook[this.inc] = this.recipeToDisplay.getRecipeTitle;
    localStorage.setItem(this.afAuth.user.email, JSON.stringify(this.recipeToBook));
    this.inc++;
    localStorage.setItem("increment",JSON.stringify(this.inc));
    //skeleton to be filled in by Austin/Tony
    }else{
        this.recipeToBook[this.inc]=this.recipeToDisplay.getRecipeTitle;
        localStorage.setItem(this.afAuth.user.email,JSON.stringify(this.recipeToBook));
        this.inc++;
        localStorage.setItem("increment",JSON.stringify(this.inc));
    }
    console.log(this.inc); */
  }

  isRecipeBookmarked(): boolean {
    // check and see if the recipe is saved to local storage.
    return true;
  }

  setupIngredientsList() {
    for(let i = 0; i < this.recipeToDisplay.getIngredients.length; i++) {
      this.ingredients.push({
        name: this.recipeToDisplay.getIngredients[i]
      });
    }
  }

  setupStepsList() {
    for(let i = 0; i < this.recipeToDisplay.getSteps.length; i++) {
      this.steps.push({
        str: this.recipeToDisplay.getSteps[i]
      });
    }
  }

  stringifyMacro(macro: Macro): string{
    if (macro === Macro.Carbohydrates) {
      return 'Carbohydrates';
    } else if (macro === Macro.Fat) {
      return 'Fats';
    } else {
      return 'Protein';
    }
  }

  getMacroString(): string {
    let macroString: string = '';
    for (let i = 0; i < this.macros.length; i++) {
      macroString += this.stringifyMacro(this.macros[i]);
      if(i < this.macros.length - 1) {
        macroString += ', '
      }
    }
    return macroString;
  }

  ngOnInit() {

  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

}
