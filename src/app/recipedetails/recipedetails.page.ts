import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { Macro } from '../Recipe'
import { NavController } from '@ionic/angular';
import { RecipeListPage } from '../recipelist/recipelist.page'

@Component({
  selector: 'app-home',
  templateUrl: 'recipedetails.page.html',
  styleUrls: ['recipedetails.page.scss'],
})

export class RecipeDetailsPage{
  private recipeToDisplay: Recipe;
  public recipeTitle: string;
  public servingSize: string;
  public prepTime: string;
  public macros: Macro[];
  public macroString: string;
  public ingredients: Array <{ name: string }> = [];
  public steps: Array<{ str: string }> = [];

  constructor(private navCtrl: NavController) {
    this.recipeToDisplay = RecipeListPage.getSelectedRecipe;
    this.recipeTitle = this.recipeToDisplay.getRecipeTitle;
    this.servingSize = this.recipeToDisplay.getNumServings;
    this.prepTime = this.recipeToDisplay.getPrepTime;
    this.macros = this.recipeToDisplay.getMacros;
     
    // populate lists of ingredients and steps
    this.setupIngredientsList();
    this.setupStepsList();
    this.macroString = this.getMacroString();
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
