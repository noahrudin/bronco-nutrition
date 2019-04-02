export enum Macro { Carbohydrates, Protein, Fat}

const CARBS_STR = 'C';
const PROTEIN_STR = 'P';
const FAT_STR = 'F';

export class Recipe {

  private static _recipeToDisplay: Recipe;

  constructor(public title: string, private numServings: string, private macros: Macro[],
              private prepTime: string, private ingredients: string[], private steps: string[], private absIdx: number) { }

  static get getRecipeToDisplay() {
    return Recipe._recipeToDisplay;
  }

  static set recipeToDisplay(recipe: Recipe) {
    Recipe._recipeToDisplay = recipe;
  }

  get dbIndex() {
    return this.absIdx;
  }

  get getRecipeTitle() {
    return this.title;
  }

  get getNumServings() {
    return this.numServings;
  }

  get getMacros() {
    return this.macros;
  }

  get getPrepTime() {
    return this.prepTime;
  }

  get getIngredients() {
    return this.ingredients;
  }

  get getSteps() {
    return this.steps;
  }

  static parseNumServings(servings: string): string {
    return servings;
  }

  // parse out the 3 basic nutrition macros from
  // the firebase data store.
  static parseMacros(macros: string): Macro[] {
    const returnArray: Macro[] = [];
    if (macros.indexOf('C') !== -1 ) {
      returnArray.push(Macro.Carbohydrates);
    }

    if (macros.indexOf('P') !== -1) {
      returnArray.push(Macro.Protein);
    }

    if (macros.indexOf('F') !== -1) {
      returnArray.push(Macro.Fat);
    }

    return returnArray;
  }

  static parseSteps(stepsStr: string): string[] {
     let steps = stepsStr.split("\n");
     let regex = /\d. /;

     for(let i = 0; i < steps.length; i++) {
       steps[i] = steps[i].replace(regex, "");
     }

     return steps;
  }

  static parseIngredients(ingredientsStr: string): string[] {
    return ingredientsStr.split("\n");
  }
}
